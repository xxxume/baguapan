# 八卦盘小程序

一款基于微信小程序开发的电子八卦罗盘，用于占卜和寻求指引。当遇到难以抉择的事情时，可以通过问卜八卦来获得启发。

## 下载和体验

- [点击下载最新版本](https://github.com/xxxume/baguapan/releases/tag/%E5%BE%AE%E4%BF%A1%E5%85%AB%E5%8D%A6%E7%BD%97%E7%9B%98)
- 发布日期：2023-12-23
- 版本：v1.0.0

## 界面预览

<div align="center">
  <img src="https://image.xxxu.me/rest/X2nKslK.png" alt="罗盘界面" width="300">
  <img src="https://image.xxxu.me/rest/J9kKslK.png" alt="解读结果" width="300">
</div>

## 主要功能

1. **电子罗盘转动**
   - 点击启动罗盘随机转动
   - 太极图持续旋转动画效果
   - 转动结束后震动反馈

2. **卦象解读**
   - 包含完整64卦的解读内容
   - 每一卦都包含详细的：
     - 卦象描述
     - 形势分析
     - 行动建议
     - 各方面详解（事业、感情、财运、健康等）

## 技术特点

1. **代码结构**
   - 采用微信小程序原生开发
   - 模块化的数据管理
   - 组件化的界面设计

2. **数据验证**
   - 完整的卦象数据验证机制
   - 自动修复数据顺序功能
   - 错误提示和异常处理

3. **性能优化**
   - 高效的动画实现
   - 合理的数据结构
   - 优化的用户体验

## 技术架构

### 前端架构

1. **基础框架**
   - 微信小程序原生框架
   - WXML + WXSS + JavaScript
   - 组件化开发

2. **核心功能**
   - 罗盘动画系统
     - CSS3 动画实现
     - 随机角度计算
     - 动画状态管理
   - 数据管理系统
     - 64卦数据存储
     - 数据验证机制
     - 状态管理
   - 交互反馈系统
     - 震动反馈
     - 动画过渡
     - 结果展示

3. **性能优化**
   - 按需加载
   - 图片资源压缩
   - 动画性能优化

### 代码架构

1. **目录结构**
   ```
   baguapan/
   ├── pages/              # 页面文件
   │   └── compass/       # 罗盘主页面
   ├── utils/             # 工具函数
   ├── images/            # 图片资源
   └── app.*             # 全局文件
   ```

2. **模块划分**
   - 视图层（View）
     - 罗盘展示
     - 结果显示
     - 动画效果
   - 逻辑层（Logic）
     - 数据处理
     - 动画控制
     - 状态管理
   - 数据层（Data）
     - 卦象数据
     - 配置信息

3. **关键技术**
   - 动画实现
     ```css
     .compass-wrapper {
       transition: transform 5s cubic-bezier(0.2, 0.8, 0.3, 1);
     }
     ```
   - 数据验证
     ```javascript
     validateGua(gua) {
       // 数据完整性检查
       // 字段验证
       // 数据修复
     }
     ```
   - 状态管理
     ```javascript
     this.setData({
       isSpinning: true,
       showResult: false
     });
     ```

## 项目结构

## 图片资源说明

项目使用的主要图片资源：

1. **罗盘图片 (compass.png)**
   - 位置：`images/compass.png`
   - 用途：主界面罗盘背景
   - 尺寸：建议使用 600x600px
   - 格式：PNG（支持透明背景）

2. **太极图片 (taiji.png)**
   - 位置：`images/taiji.png`
   - 用途：罗盘中心旋转的太极图
   - 尺寸：建议使用 180x180px
   - 格式：PNG（支持透明背景）

## 自定义图片

如果您想替换默认图片：

1. 准备新的图片文件
2. 将图片文件重命名为 `compass.png` 和 `taiji.png`
3. 替换 `images` 目录下的对应文件
4. 注意保持图片尺寸比例一致

注意：图片尺寸过大可能会影响小程序的加载性能，建议进行适当压缩。

## 更新日志

### v1.0.0 (2023-12-23)
- 初始版本发布
- 实现基本的罗盘功能
- 完成64卦数整理
- 添加基础动画效果

## 免责声明

1. **占卜结果仅供参考**
   - 本小程序供的八卦占卜结果仅供娱乐和参考
   - 不应将占卜结果作为人生重大决策的唯一依据
   - 请用户理性对待占卜结果，保持独立思考

2. **用户行为责任**
   - 用户在使用本小程序时应遵守相关法律法规
   - 对于用户因采信占卜结果而做出的决定及其后果，本小程序不承担任何责任
   - 用户应对自己的行为负责

3. **内容版权说明**
   - 本小程序中的卦象解读内容来源于传统易经文化
   - 如有侵犯到任何人的合法权益，请及时联系我们进行处理
   - 未经授权，禁止对本小程序内容进行商业用途的复制或传播

4. **技术免责**
   - 本小程序会持续进行维护和更新
   - 由于不可抗力或技术问题导致的服务中断，开发者不承担责任
   - 我们会尽最大努力确保服务的稳定性和可用性

注意：使用本小程序即表示您已阅读并同意以上免责声明。如有异议，请立即停止使用。

## 安装说明

### 快速安装

1. **下载项目**
   - [点击下载打包文件](https://github.com/xxxume/baguapan/releases/tag/%E5%BE%AE%E4%BF%A1%E5%85%AB%E5%8D%A6%E7%BD%97%E7%9B%98)
   - 解压下载的文件包

2. **导入项目**
   - 打开[微信开发者工具](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html)
   - 点击"导入项目"
   - 选择解压后的项目文件夹
   - 填入自己的小程序 AppID（可使用测试号）

3. **运行预览**
   - 点击开发者工具的"预览"
   - 使用微信扫描预览二维码
   - 即可在手机上体验

4. **发布上传**
   - 点击开发者工具的"上传"
   - 填写版本号和项目备注
   - 提交审核即可

### 注意事项

- 首次使用需要在[微信公众平台](https://mp.weixin.qq.com/)注册小程序账号
- 建议使用最新版本的微信开发者工具
- 上传前请确保 `project.config.json` 中的 appid 已更改为您自己的小程序 appid

## 开源协议

本项目采用 [MIT 许可证](LICENSE) 进行开源。

### MIT License

Copyright (c) 2024 xxxume

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

### 简要说明

- 你可以自由使用、修改、分发本项目的代码
- 你可以将本项目用于商业目的
- 你需要在项目中包含原始许可证和版权声明
- 作者不对使用本项目所产生的后果负责
