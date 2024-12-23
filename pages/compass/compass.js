import { guaData } from './gua-data';

// 在 Page 外部定义一个函数来验证和修复顺序
const validateAndFixGuaOrder = (guas) => {
  // 按 id 排序
  const sortedGuas = [...guas].sort((a, b) => a.id - b.id);
  
  // 检查顺序
  let hasError = false;
  sortedGuas.forEach((gua, index) => {
    if (gua.id !== index + 1) {
      console.error(`Gua ${gua.name} has wrong id: ${gua.id}, should be ${index + 1}`);
      hasError = true;
    }
  });

  if (hasError) {
    console.error('Found errors in Gua order, fixing...');
  }

  return sortedGuas;
};

// 验证卦象数据的完整性
const validateGua = (gua) => {
  try {
    // 检查基本字段
    if (!gua || typeof gua !== 'object') {
      throw new Error('Invalid gua object');
    }

    // 检查必需字段
    const requiredFields = ['id', 'name', 'description', 'analysis', 'advice', 'details'];
    requiredFields.forEach(field => {
      if (!gua[field]) {
        throw new Error(`Missing required field: ${field}`);
      }
    });

    // 检查 details 对象
    if (!gua.details || typeof gua.details !== 'object') {
      throw new Error('Invalid details object');
    }

    // 检查 details 必需字段
    const detailsFields = ['general', 'career', 'love', 'fortune', 'health'];
    detailsFields.forEach(field => {
      if (!gua.details[field]) {
        throw new Error(`Missing details.${field}`);
      }
      if (field !== 'general') {
        if (!gua.details[field].situation || !gua.details[field].advice) {
          throw new Error(`Missing situation/advice in details.${field}`);
        }
      }
    });

    return true;
  } catch (error) {
    console.error(`Validation failed for Gua ${gua?.name || 'unknown'}:`, error.message);
    return false;
  }
};

Page({
  data: {
    isSpinning: false,
    showResult: false,
    currentGua: null,
    rotateStyle: '',
    guas: guaData
  },

  onLoad() {
    // 检查卦象顺序
    const guas = this.data.guas;
    const checkGuas = [49, 50, 51, 52, 53, 54, 55, 56, 57];
    
    checkGuas.forEach(id => {
      const gua = guas.find(g => g.id === id);
      const position = guas.indexOf(gua);
      
      if (!gua) {
        console.error(`Missing Gua ${id}`);
      } else if (position !== id - 1) {
        console.error(`Gua ${gua.name} is at wrong position: ${position}, should be at ${id - 1}`);
        // 修正位置
        this.setData({
          guas: validateAndFixGuaOrder(this.data.guas)
        });
      }
    });
  },

  startDivination() {
    if (this.data.isSpinning) return;
    
    const minSpins = 8;
    const maxSpins = 12;
    const randomSpins = minSpins + Math.random() * (maxSpins - minSpins);
    const randomDegree = 360 * randomSpins + Math.random() * 360;
    
    this.setData({
      isSpinning: true,
      showResult: false,
      rotateStyle: `transform: rotate(${randomDegree}deg)`
    });
    
    wx.vibrateShort();
    
    setTimeout(() => {
      const randomGua = Math.floor(Math.random() * this.data.guas.length);
      const selectedGua = this.data.guas[randomGua];
      
      // 验证数据完整性
      if (!validateGua(selectedGua)) {
        console.error('Invalid Gua data:', selectedGua);
        wx.showToast({
          title: '数据错误，请重试',
          icon: 'none'
        });
        return;
      }
      
      this.setData({
        isSpinning: false,
        showResult: true,
        currentGua: selectedGua
      }, () => {
        console.log('Current Gua:', this.data.currentGua);
      });
      
      wx.vibrateShort();
    }, 5000);
  }
}); 