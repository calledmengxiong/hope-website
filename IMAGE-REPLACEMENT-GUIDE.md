# 网站图片替换说明文档

这份文档是给不懂代码的人看的。以后你想替换网站图片，优先按这里的路径和文件名操作。

当前网站是纯静态 HTML + CSS + JavaScript 项目。图片主要放在：

- `assets/`
- `assets/images/`
- `assets/images/team/`
- `assets/products/`
- 项目根目录，例如 `bg.png`

## 一、图片替换总原则

1. 最简单、最安全的方法：新图片改成和旧图片一模一样的文件名，然后直接覆盖旧图片。
2. 如果你改了图片文件名，就必须同步修改代码里的图片路径；不懂代码时不建议这样做。
3. 图片路径、大小写、空格、后缀名必须完全一致。例如 `.webp` 和 `.jpg` 不是同一个文件。
4. 建议优先使用 `.webp`，其次使用 `.jpg` / `.png`。
5. 不建议使用中文文件名。
6. 文件名建议使用英文小写和短横线，例如 `product-name.webp`。
7. 替换后浏览器要按 `Ctrl + F5` 强制刷新。
8. 如果上传到 GitHub / Cloudflare Pages，需要等 Cloudflare 重新部署完成后再看线上效果。
9. 网站很多图片使用 `object-fit: cover`，意思是图片不会变形，但边缘可能会被裁切。
10. 如果人物、产品重点被裁掉，优先换一张主体更居中的图片。

## 二、首页图片替换说明

首页文件主要是 `index.html`，部分背景图样式在 `styles.css`。

| 页面 | 模块 | 当前图片路径 | 图片用途 | 推荐尺寸 | 推荐比例 | 替换方法 | 注意事项 |
|---|---|---|---|---|---|---|---|
| 首页 | 导航栏 Logo | `assets/images/hope-logo-corrected.svg` | 顶部 Logo，优先使用 SVG | SVG 或宽度 300px 以上 PNG | 横版 Logo | 用新 Logo 覆盖同名文件 | 不要拉伸变形，透明背景更好 |
| 首页 | 导航栏 Logo 备用图 | `assets/images/hope-logo-transparent-corrected.png` | SVG 显示异常时备用 | 600 x 240 左右 | 横版 Logo | 覆盖同名 PNG | 保持透明背景 |
| 首页 | Hero 第 1 张背景 | `assets/hero-leather.png` | 首页顶部轮播，人造革主题 | 1920 x 800 或 1920 x 900 | 约 16:7 / 16:8 | 覆盖同名文件 | 图片上不要带文字、Logo、水印 |
| 首页 | Hero 第 2 张背景 | `assets/hero-color.png` | 首页顶部轮播，颜料色彩主题 | 1920 x 800 或 1920 x 900 | 约 16:7 / 16:8 | 覆盖同名文件 | 色彩可以鲜明，但不要太像广告海报 |
| 首页 | Hero 第 3 张背景 | `assets/hero-factory.png` | 首页顶部轮播，工厂主题 | 1920 x 800 或 1920 x 900 | 约 16:7 / 16:8 | 覆盖同名文件 | 建议横版工厂或生产环境图片 |
| 首页 | 右侧产品卡片 - Colorant / Pigment | `assets/category-colorant.png` | 首页上方 4 个产品卡片图片 | 600 x 400 | 3:2 | 覆盖同名文件 | 适合颜料、色浆、色粉、彩色液体 |
| 首页 | 右侧产品卡片 - Artificial Leather | `assets/category-artificial-leather.png` | 首页上方 4 个产品卡片图片 | 600 x 400 | 3:2 | 覆盖同名文件 | 适合皮革卷材、皮革纹理 |
| 首页 | 右侧产品卡片 - Silicone Additives | `assets/category-silicone-additives.png` | 首页上方 4 个产品卡片图片 | 600 x 400 | 3:2 | 覆盖同名文件 | 适合实验室液体、白色粉体、助剂样品 |
| 首页 | 右侧产品卡片 - Surface Finishing Agent | `assets/category-surface-finishing.png` | 首页上方 4 个产品卡片图片 | 600 x 400 | 3:2 | 覆盖同名文件 | 适合水滴、表面处理、皮革表面效果 |
| 首页 | Reliable Material Partner 背景图 | `bg.png` | 首页服务区固定背景大图 | 1920 x 700 或 1920 x 800 | 横版大图 | 覆盖项目根目录的 `bg.png` | 这是你之前要求固定背景效果的那张图 |
| 首页 | 服务区卡片 - Resin | `assets/resin.png` | Reliable Material Partner 右侧小卡片 | 600 x 400 | 3:2 | 覆盖同名文件 | 适合树脂、透明液体、实验室器皿 |
| 首页 | 服务区卡片 - Release Paper | `assets/release-paper-pu.png` | Reliable Material Partner 右侧小卡片 | 600 x 400 | 3:2 | 覆盖同名文件 | 适合离型纸、卷材、黑色哑光纸 |
| 首页 | 服务区卡片 - Fabric | `assets/fabric.png` | Reliable Material Partner 右侧小卡片 | 600 x 400 | 3:2 | 覆盖同名文件 | 适合基布、布料、超纤材料 |
| 首页 | 服务区卡片 - Plasticizer | `assets/plasticizer.png` | Reliable Material Partner 右侧小卡片 | 600 x 400 | 3:2 | 覆盖同名文件 | 适合透明液体、塑化剂瓶、实验室样品 |
| 首页 | 产品目录 - Colorant / Pigment | `assets/category-colorant.png` | Our Products & Material Solutions 产品目录图 | 600 x 400 | 3:2 | 覆盖同名文件 | 同时影响首页上方 Colorant 卡片 |
| 首页 | 产品目录 - Artificial Leather | `assets/category-artificial-leather.png` | Our Products & Material Solutions 产品目录图 | 600 x 400 | 3:2 | 覆盖同名文件 | 同时影响首页上方 Artificial Leather 卡片 |
| 首页 | 产品目录 - Silicone Additives | `assets/category-silicone-additives.png` | Our Products & Material Solutions 产品目录图 | 600 x 400 | 3:2 | 覆盖同名文件 | 同时影响首页上方 Silicone Additives 卡片 |
| 首页 | 产品目录 - Surface Finishing Agents | `assets/category-surface-finishing.png` | Our Products & Material Solutions 产品目录图 | 600 x 400 | 3:2 | 覆盖同名文件 | 同时影响首页上方 Surface Finishing 卡片 |
| 首页 | 产品目录 - Resin | `assets/products/water-based-pu-resin.webp` | Our Products & Material Solutions 产品目录图 | 600 x 400 | 3:2 | 覆盖同名文件 | 这张也用于 Products 页面部分树脂产品 |
| 首页 | 产品目录 - Release Paper | `assets/release-paper-pu.png` | Our Products & Material Solutions 产品目录图 | 600 x 400 | 3:2 | 覆盖同名文件 | 同时影响服务区 Release Paper 卡片 |
| 首页 | 产品目录 - Fabric / Base Material | `assets/fabric.png` | Our Products & Material Solutions 产品目录图 | 600 x 400 | 3:2 | 覆盖同名文件 | 同时影响服务区 Fabric 卡片 |
| 首页 | 产品目录 - Plasticizer | `assets/plasticizer.png` | Our Products & Material Solutions 产品目录图 | 600 x 400 | 3:2 | 覆盖同名文件 | 同时影响服务区 Plasticizer 卡片 |
| 首页 | 展会轮播第 1 页卡片 1 | `assets/factory-visit.jpg` | Global Exhibitions & Customer Visits 卡片图 | 900 x 600 或 1200 x 800 | 3:2 | 覆盖同名文件 | 建议客户拜访、交流照片 |
| 首页 | 展会轮播第 1 页卡片 2 | `assets/production-inspection.jpg` | Global Exhibitions & Customer Visits 卡片图 | 900 x 600 或 1200 x 800 | 3:2 | 覆盖同名文件 | 建议车间、生产线参观照片 |
| 首页 | 展会轮播第 1 页卡片 3 | `assets/exhibition.jpg` | Global Exhibitions & Customer Visits 卡片图 | 900 x 600 或 1200 x 800 | 3:2 | 覆盖同名文件 | 这张也用于 About Us 顶部 Banner 背景 |
| 首页 | 展会轮播第 2 页卡片 1 | `assets/images/factory-visit-technical-discussion.jpg` | Global Exhibitions & Customer Visits 卡片图 | 900 x 600 或 1200 x 800 | 3:2 | 覆盖同名文件 | 建议工厂参观、技术交流照片 |
| 首页 | 展会轮播第 2 页卡片 2 | `assets/images/production-line-inspection.jpg` | Global Exhibitions & Customer Visits 卡片图 | 900 x 600 或 1200 x 800 | 3:2 | 覆盖同名文件 | 建议生产线检查照片 |
| 首页 | 展会轮播第 2 页卡片 3 | `assets/images/international-exhibition-meeting.jpg` | Global Exhibitions & Customer Visits 卡片图 | 900 x 600 或 1200 x 800 | 3:2 | 覆盖同名文件 | 建议展会客户合影 |
| 首页 | Footer 背景图 | 当前没有单独 Footer 背景图 | 页脚使用 CSS 背景色 | 不适用 | 不适用 | 不需要替换 | Footer 主要是颜色，不是图片 |

## 三、About Us 页面图片替换说明

About Us 页面文件是 `about.html`，顶部 Banner 背景样式在 `styles.css`。

| 页面 | 模块 | 当前图片路径 | 图片用途 | 推荐尺寸 | 推荐比例 | 替换方法 | 注意事项 |
|---|---|---|---|---|---|---|---|
| About Us | 导航栏 Logo | `assets/images/hope-logo-corrected.svg` | 顶部 Logo | SVG 或宽度 300px 以上 PNG | 横版 Logo | 覆盖同名文件 | 所有页面共用 |
| About Us | Logo 备用图 | `assets/images/hope-logo-transparent-corrected.png` | Logo 备用 PNG | 600 x 240 左右 | 横版 Logo | 覆盖同名文件 | 所有页面共用 |
| About Us | 顶部 Banner 背景 | `assets/exhibition.jpg` | About Hero 背景图 | 1920 x 700 | 横版大图 | 覆盖同名文件 | 注意这张也影响首页展会卡片第 1 页第 3 张 |
| About Us | 圆形能力图 - Artificial Leather | `assets/category-artificial-leather.png` | 产品能力圆形图片 | 600 x 600 | 1:1 | 覆盖同名文件 | 圆形显示，建议主体居中 |
| About Us | 圆形能力图 - Fabric | `assets/fabric.png` | 产品能力圆形图片 | 600 x 600 | 1:1 | 覆盖同名文件 | 同时影响首页 Fabric 图片 |
| About Us | 圆形能力图 - Silicone Additives | `assets/category-silicone-additives.png` | 产品能力圆形图片 | 600 x 600 | 1:1 | 覆盖同名文件 | 同时影响首页 Silicone Additives 图片 |
| About Us | 圆形能力图 - Surface Finishing Agent | `assets/category-surface-finishing.png` | 产品能力圆形图片 | 600 x 600 | 1:1 | 覆盖同名文件 | 同时影响首页 Surface Finishing 图片 |
| About Us | 圆形能力图 - Colorant / Pigment | `assets/category-colorant.png` | 产品能力圆形图片 | 600 x 600 | 1:1 | 覆盖同名文件 | 同时影响首页 Colorant 图片 |
| About Us | 圆形能力图 - Release Paper | `assets/release-paper-pu.png` | 产品能力圆形图片 | 600 x 600 | 1:1 | 覆盖同名文件 | 同时影响首页 Release Paper 图片 |
| About Us | 圆形能力图 - Resin | `assets/resin.png` | 产品能力圆形图片 | 600 x 600 | 1:1 | 覆盖同名文件 | 同时影响首页 Resin 服务卡片 |
| About Us | 圆形能力图 - Plasticizer | `assets/plasticizer.png` | 产品能力圆形图片 | 600 x 600 | 1:1 | 覆盖同名文件 | 同时影响首页 Plasticizer 图片 |
| About Us | Team Gallery 1 | `assets/images/team/Exhibition1.jpg` | Our Team & Global Connections 横向大图 | 1200 x 800 | 3:2 | 覆盖同名文件 | 点击可放大查看 |
| About Us | Team Gallery 2 | `assets/images/team/Exhibition2.jpg` | Our Team & Global Connections 横向大图 | 1200 x 800 | 3:2 | 覆盖同名文件 | 点击可放大查看 |
| About Us | Team Gallery 3 | `assets/images/team/Exhibition3.jpg` | Our Team & Global Connections 横向大图 | 1200 x 800 | 3:2 | 覆盖同名文件 | 点击可放大查看 |
| About Us | Team Gallery 4 | `assets/images/team/Exhibition4.jpg` | Our Team & Global Connections 横向大图 | 1200 x 800 | 3:2 | 覆盖同名文件 | 点击可放大查看 |
| About Us | Team Gallery 5 | `assets/images/team/Exhibition5.jpg` | Our Team & Global Connections 横向大图 | 1200 x 800 | 3:2 | 覆盖同名文件 | 点击可放大查看 |
| About Us | Team Gallery 6 | `assets/images/team/Exhibition6.jpg` | Our Team & Global Connections 横向大图 | 1200 x 800 | 3:2 | 覆盖同名文件 | 点击可放大查看 |
| About Us | Team Gallery 7 | `assets/images/team/Factory tour1.jpg` | Our Team & Global Connections 横向大图 | 1200 x 800 | 3:2 | 覆盖同名文件 | 文件名里有空格，替换时必须保持完全一致 |
| About Us | Team Gallery 8 | `assets/images/team/Factory tour2.jpg` | Our Team & Global Connections 横向大图 | 1200 x 800 | 3:2 | 覆盖同名文件 | 文件名里有空格，替换时必须保持完全一致 |
| About Us | Team Gallery 9 | `assets/images/team/Factory1.png` | Our Team & Global Connections 横向大图 | 1200 x 800 | 3:2 | 覆盖同名文件 | 建议工厂外观或航拍图 |

About Us 图片注意事项：

1. 圆形产品能力图片建议使用正方形或接近正方形图片。
2. 团队 / 展会 / 工厂图建议使用横版照片。
3. 页面使用 `object-fit: cover` 时，图片不会变形，但可能被裁切。
4. 如果人物脸部或产品主体被裁掉，换一张主体更靠中间的图片。
5. `Mission`、`Vision`、`Our Core Values` 当前没有单独图片。

## 四、Products 页面图片替换说明

Products 页面图片来自 `data/products.js`。

这里有两个层级：

1. 一级分类代表图：每个大分类一张默认图。
2. 二级产品图：某个具体产品可以有自己的图片。

如果某个产品没有单独图片，网站会自动使用所属一级分类的代表图，避免破图。

### 1. 一级分类代表图

| 一级分类 | 当前分类代表图路径 | 推荐尺寸 | 推荐比例 | 替换建议 |
|---|---|---|---|---|
| Colorant / Pigment | `assets/products/pigment-color-paste.webp` | 800 x 600 | 4:3 | 适合颜料膏、色片、颜料类代表图 |
| Silicone Additives | `assets/products/silicone-leveling-agent.webp` | 800 x 600 | 4:3 | 适合透明液体、实验室助剂类代表图 |
| Surface Finishing Agents | `assets/products/water-based-surface-finishing-agent.webp` | 800 x 600 | 4:3 | 适合水滴、皮革表面处理效果图 |
| Resin | `assets/products/water-based-pu-resin.webp` | 800 x 600 | 4:3 | 适合树脂液体、烧杯、实验室样品 |
| Release Paper | `assets/products/embossed-release-paper.webp` | 800 x 600 | 4:3 | 适合离型纸、卷材、压纹纸 |
| Plasticizer | `assets/products/eco-friendly-plasticizer.webp` | 800 x 600 | 4:3 | 适合透明液体、塑化剂瓶、实验室样品 |
| Fabric / Base Material | `assets/products/microfiber-base-fabric.webp` | 800 x 600 | 4:3 | 适合基布、布料、超纤布 |
| Artificial Leather | `assets/products/pu-synthetic-leather.webp` | 800 x 600 | 4:3 | 适合人造革卷材、皮革纹理 |

### 2. 每个产品图片路径

| 一级分类 | 当前分类代表图路径 | 产品名称 | 产品图片路径 | 是否使用分类代表图 | 替换建议 |
|---|---|---|---|---|---|
| Colorant / Pigment | `assets/products/pigment-color-paste.webp` | Pigment Color Paste | `assets/products/pigment-color-paste.webp` | 否 | 直接覆盖该文件 |
| Colorant / Pigment | `assets/products/pigment-color-paste.webp` | PU Color Chips | `assets/products/pu-color-chips.webp` | 否 | 直接覆盖该文件 |
| Colorant / Pigment | `assets/products/pigment-color-paste.webp` | Pearl Pigment | `assets/products/pearl-pigment.webp` | 否 | 直接覆盖该文件 |
| Colorant / Pigment | `assets/products/pigment-color-paste.webp` | Printing Ink | 使用分类代表图 | 是 | 如有真实图，放到 `assets/products/` 后再改产品 image |
| Colorant / Pigment | `assets/products/pigment-color-paste.webp` | Solvent-Based Colorant | 使用分类代表图 | 是 | 如有真实图，放到 `assets/products/` 后再改产品 image |
| Colorant / Pigment | `assets/products/pigment-color-paste.webp` | Water-Based Colorant | 使用分类代表图 | 是 | 如有真实图，放到 `assets/products/` 后再改产品 image |
| Silicone Additives | `assets/products/silicone-leveling-agent.webp` | Silicone Leveling Agent | `assets/products/silicone-leveling-agent.webp` | 否 | 直接覆盖该文件 |
| Silicone Additives | `assets/products/silicone-leveling-agent.webp` | Silicone Slip Agent | `assets/products/silicone-slip-agent.webp` | 否 | 直接覆盖该文件 |
| Silicone Additives | `assets/products/silicone-leveling-agent.webp` | Additives for PU Leather | 使用分类代表图 | 是 | 如有真实图，放到 `assets/products/` 后再改产品 image |
| Silicone Additives | `assets/products/silicone-leveling-agent.webp` | Additives for PU Resin | 使用分类代表图 | 是 | 如有真实图，放到 `assets/products/` 后再改产品 image |
| Silicone Additives | `assets/products/silicone-leveling-agent.webp` | Water-Based Additives for PU | 使用分类代表图 | 是 | 如有真实图，放到 `assets/products/` 后再改产品 image |
| Surface Finishing Agents | `assets/products/water-based-surface-finishing-agent.webp` | Water-Based Surface Finishing Agent | `assets/products/water-based-surface-finishing-agent.webp` | 否 | 直接覆盖该文件 |
| Surface Finishing Agents | `assets/products/water-based-surface-finishing-agent.webp` | Solvent-Based Surface Finishing Agent | 使用分类代表图 | 是 | 如有真实图，放到 `assets/products/` 后再改产品 image |
| Surface Finishing Agents | `assets/products/water-based-surface-finishing-agent.webp` | Matte Finish Agent | 使用分类代表图 | 是 | 如有真实图，放到 `assets/products/` 后再改产品 image |
| Surface Finishing Agents | `assets/products/water-based-surface-finishing-agent.webp` | Glossy Finish Agent | 使用分类代表图 | 是 | 如有真实图，放到 `assets/products/` 后再改产品 image |
| Surface Finishing Agents | `assets/products/water-based-surface-finishing-agent.webp` | Soft Touch Finishing Agent | 使用分类代表图 | 是 | 如有真实图，放到 `assets/products/` 后再改产品 image |
| Resin | `assets/products/water-based-pu-resin.webp` | Water-Based PU Resin | `assets/products/water-based-pu-resin.webp` | 否 | 直接覆盖该文件 |
| Resin | `assets/products/water-based-pu-resin.webp` | Solvent-Based PU Resin | 使用分类代表图 | 是 | 如有真实图，放到 `assets/products/` 后再改产品 image |
| Resin | `assets/products/water-based-pu-resin.webp` | Semi-PU Resin | 使用分类代表图 | 是 | 如有真实图，放到 `assets/products/` 后再改产品 image |
| Resin | `assets/products/water-based-pu-resin.webp` | Acrylic Resin | 使用分类代表图 | 是 | 如有真实图，放到 `assets/products/` 后再改产品 image |
| Resin | `assets/products/water-based-pu-resin.webp` | Binder Resin | 使用分类代表图 | 是 | 如有真实图，放到 `assets/products/` 后再改产品 image |
| Resin | `assets/products/water-based-pu-resin.webp` | Release Resin | 使用分类代表图 | 是 | 如有真实图，放到 `assets/products/` 后再改产品 image |
| Release Paper | `assets/products/embossed-release-paper.webp` | Matte Release Paper | `assets/products/embossed-release-paper.webp` | 否 | 当前共用 embossed 图，想更准确可换成哑光离型纸实拍 |
| Release Paper | `assets/products/embossed-release-paper.webp` | Matte Release Paper for PU Leather | `assets/products/matte-release-paper-for-pu-leather.webp` | 否 | 直接覆盖该文件 |
| Release Paper | `assets/products/embossed-release-paper.webp` | Glossy Release Paper | 使用分类代表图 | 是 | 如有真实图，放到 `assets/products/` 后再改产品 image |
| Release Paper | `assets/products/embossed-release-paper.webp` | Embossed Release Paper | 使用分类代表图 | 是 | 如有真实图，放到 `assets/products/` 后再改产品 image |
| Release Paper | `assets/products/embossed-release-paper.webp` | Silicone Release Paper | 使用分类代表图 | 是 | 如有真实图，放到 `assets/products/` 后再改产品 image |
| Release Paper | `assets/products/embossed-release-paper.webp` | PU Synthetic Leather Release Paper | 使用分类代表图 | 是 | 如有真实图，放到 `assets/products/` 后再改产品 image |
| Plasticizer | `assets/products/eco-friendly-plasticizer.webp` | DOP | `assets/products/eco-friendly-plasticizer.webp` | 否 | 当前共用环保塑化剂图，想更准确可换成 DOP 实拍 |
| Plasticizer | `assets/products/eco-friendly-plasticizer.webp` | DOTP | 使用分类代表图 | 是 | 如有真实图，放到 `assets/products/` 后再改产品 image |
| Plasticizer | `assets/products/eco-friendly-plasticizer.webp` | DINP | 使用分类代表图 | 是 | 如有真实图，放到 `assets/products/` 后再改产品 image |
| Plasticizer | `assets/products/eco-friendly-plasticizer.webp` | TOTM | 使用分类代表图 | 是 | 如有真实图，放到 `assets/products/` 后再改产品 image |
| Plasticizer | `assets/products/eco-friendly-plasticizer.webp` | Bio-Based Plasticizer | 使用分类代表图 | 是 | 如有真实图，放到 `assets/products/` 后再改产品 image |
| Plasticizer | `assets/products/eco-friendly-plasticizer.webp` | Eco-Friendly Plasticizer | 使用分类代表图 | 是 | 如有真实图，放到 `assets/products/` 后再改产品 image |
| Fabric / Base Material | `assets/products/microfiber-base-fabric.webp` | Nonwoven Fabric | `assets/products/microfiber-base-fabric.webp` | 否 | 当前共用超纤基布图，想更准确可换成无纺布图 |
| Fabric / Base Material | `assets/products/microfiber-base-fabric.webp` | Knitted Fabric | 使用分类代表图 | 是 | 如有真实图，放到 `assets/products/` 后再改产品 image |
| Fabric / Base Material | `assets/products/microfiber-base-fabric.webp` | Microfiber Base Fabric | 使用分类代表图 | 是 | 如有真实图，放到 `assets/products/` 后再改产品 image |
| Fabric / Base Material | `assets/products/microfiber-base-fabric.webp` | Polyester Fabric | 使用分类代表图 | 是 | 如有真实图，放到 `assets/products/` 后再改产品 image |
| Fabric / Base Material | `assets/products/microfiber-base-fabric.webp` | Cotton Backing Fabric | 使用分类代表图 | 是 | 如有真实图，放到 `assets/products/` 后再改产品 image |
| Artificial Leather | `assets/products/pu-synthetic-leather.webp` | PU Leather | `assets/products/pu-synthetic-leather.webp` | 否 | 直接覆盖该文件 |
| Artificial Leather | `assets/products/pu-synthetic-leather.webp` | Semi-PU Leather | 使用分类代表图 | 是 | 如有真实图，放到 `assets/products/` 后再改产品 image |
| Artificial Leather | `assets/products/pu-synthetic-leather.webp` | PVC Leather | `assets/products/pvc-synthetic-leather.webp` | 否 | 直接覆盖该文件 |
| Artificial Leather | `assets/products/pu-synthetic-leather.webp` | Microfiber Leather | 使用分类代表图 | 是 | 如有真实图，放到 `assets/products/` 后再改产品 image |
| Artificial Leather | `assets/products/pu-synthetic-leather.webp` | Water-Based Leather | 使用分类代表图 | 是 | 如有真实图，放到 `assets/products/` 后再改产品 image |
| Artificial Leather | `assets/products/pu-synthetic-leather.webp` | Automotive Leather | 使用分类代表图 | 是 | 如有真实图，放到 `assets/products/` 后再改产品 image |
| Artificial Leather | `assets/products/pu-synthetic-leather.webp` | Sofa Leather | 使用分类代表图 | 是 | 如有真实图，放到 `assets/products/` 后再改产品 image |
| Artificial Leather | `assets/products/pu-synthetic-leather.webp` | Shoe Upper Leather | 使用分类代表图 | 是 | 如有真实图，放到 `assets/products/` 后再改产品 image |

Products 页面替换方法：

1. 如果只想替换某一个已有产品图片，最简单是覆盖上表里的同名图片。
2. 如果某个产品当前使用分类代表图，而你想给它单独图片，需要把图片放到 `assets/products/`，再修改 `data/products.js` 里该产品的 `image` 和 `useCategoryImage`。
3. 如果想让某个产品继续使用分类代表图，保持 `useCategoryImage: true`。
4. 如果有真实产品图，建议使用独立图片，并设置 `useCategoryImage: false`。
5. 产品图片命名建议使用产品 slug，例如 `matte-release-paper-for-pu-leather.webp`。
6. 产品详情图推荐尺寸：`800 x 600`，比例 `4:3`。

## 五、Contact Us / Thanks 页面图片替换说明

当前项目没有单独的 `contact.html` 页面，Contact Us 是首页 `index.html` 里的联系模块。

| 页面 | 模块 | 当前图片路径 | 图片用途 | 替换说明 |
|---|---|---|---|---|
| Contact Us | 导航栏 Logo | `assets/images/hope-logo-corrected.svg` | 顶部 Logo | 与全站 Logo 共用 |
| Contact Us | 表单区域 | 当前没有单独图片 | 联系表单和文字 | 不需要替换图片 |
| Thanks 页面 | 导航栏 Logo | `assets/images/hope-logo-corrected.svg` | 顶部 Logo | 与全站 Logo 共用 |
| Thanks 页面 | 成功提示区域 | 当前没有单独图片 | 提交成功文字 | 不需要替换图片 |
| Footer | 背景 | 当前没有单独图片 | 页脚背景色 | 不需要替换图片 |

## 六、Logo 替换说明

当前导航栏 Logo 使用：

- 主 Logo：`assets/images/hope-logo-corrected.svg`
- 备用 Logo：`assets/images/hope-logo-transparent-corrected.png`

说明：

1. 网站所有页面导航栏都使用这套 Logo。
2. 优先显示 SVG：`assets/images/hope-logo-corrected.svg`。
3. 如果 SVG 显示异常，备用 PNG 是 `assets/images/hope-logo-transparent-corrected.png`。
4. 建议使用透明背景 PNG 或 SVG。
5. 如果 Logo 显示发白、没颜色，说明可能用了旧 Logo，需要换成正确透明 PNG 或 SVG。
6. 替换 Logo 时，最简单是保持原文件名不变，直接覆盖旧文件。
7. PNG Logo 建议宽度 600px 以上，网页里会自动缩小显示。
8. 替换后请检查：`index.html`、`about.html`、`products.html`、`thanks.html`。

## 七、推荐图片尺寸

| 图片类型 | 推荐尺寸 | 推荐比例 | 说明 |
|---|---|---|---|
| 首页 Hero 背景图 | 1920 x 800 或 1920 x 900 | 横版宽图 | 不要有文字、Logo、水印 |
| 大横幅背景图 | 1920 x 700 | 横版宽图 | 适合 About Banner、服务区背景 |
| 首页产品卡片图 | 600 x 400 | 3:2 | 卡片图统一更整齐 |
| 首页服务小卡片图 | 600 x 400 | 3:2 | 主体居中，避免裁切 |
| 产品详情图 | 800 x 600 | 4:3 | Products 页面右侧详情图 |
| 产品分类代表图 | 800 x 600 | 4:3 | 放在 `assets/products/` |
| About Us 圆形图 | 600 x 600 | 1:1 | 圆形裁切，主体要居中 |
| 团队 / 展会横向图 | 900 x 600 或 1200 x 800 | 3:2 | 横向滚动和卡片使用 |
| Footer 背景图 | 当前未使用 | 不适用 | 当前 Footer 没有背景图片 |
| Logo | SVG 或 PNG 宽度 600px 以上 | 横版 Logo | 透明背景最好 |

## 八、替换图片后的检查步骤

1. 在本文档里找到你要替换的旧图片路径。
2. 准备新图片。
3. 把新图片改成和旧图片完全一样的文件名。
4. 把新图片放到旧图片所在文件夹，覆盖旧图片。
5. 打开 PowerShell。
6. 输入：

```powershell
cd E:\Codex\pictures
python -m http.server 8000
```

7. 浏览器打开：

```text
http://localhost:8000/index.html
```

8. 按 `Ctrl + F5` 强制刷新。
9. 检查图片是否显示、是否清晰、是否被裁切。
10. Products 页面请打开：

```text
http://localhost:8000/products.html
```

11. 如果线上已经部署到 Cloudflare Pages，上传 GitHub 后等重新部署完成，再刷新线上网站。

## 九、常见错误排查

### 1. 图片不显示

检查：

- 文件是否放错文件夹；
- 文件名是否完全一致；
- 后缀是否一致，例如 `.webp`、`.jpg`、`.png`；
- 文件名大小写是否一致；
- 是否用了中文文件名或特殊符号。

### 2. 图片变形

一般是图片比例不合适。建议按本文档推荐尺寸重新裁剪图片。

### 3. 图片被裁切

网站很多位置使用 `object-fit: cover`，图片不会变形，但边缘可能被裁切。解决方法：

- 换主体更居中的图片；
- 图片四周多留一点空白；
- 使用更接近推荐比例的图片。

### 4. 图片太模糊

原因通常是图片尺寸太小。建议使用本文档推荐尺寸，Logo PNG 建议宽度 600px 以上。

### 5. 图片文件太大，网站加载慢

建议：

- 产品图控制在 200KB - 500KB 左右；
- 大背景图控制在 500KB - 1.5MB 左右；
- 优先使用 `.webp`。

### 6. 文件名大小写不一致

例如代码里是 `Factory1.png`，文件不能写成 `factory1.png`。本地有时能显示，线上可能不显示。

### 7. 图片后缀写错

例如代码里是 `pigment-color-paste.webp`，你放了 `pigment-color-paste.jpg`，网站会找不到图片。

### 8. 改了图片名但没改代码路径

不懂代码时，建议不要改文件名。保持原文件名覆盖最安全。

### 9. Cloudflare 发布后还是旧图片

可能原因：

- Cloudflare 还没部署完成；
- 浏览器缓存；
- Cloudflare 缓存。

解决：

- 等 1-3 分钟；
- 浏览器按 `Ctrl + F5`；
- 必要时在 Cloudflare 里清缓存。

### 10. 本地显示正常，线上不显示

常见原因：

- 文件没有上传到 GitHub；
- 文件名大小写在线上不匹配；
- 路径写错；
- Cloudflare 还没部署最新版本。

## 十、不要修改代码

如果你只是替换图片，建议不要修改：

- `index.html`
- `about.html`
- `products.html`
- `thanks.html`
- `styles.css`
- `script.js`
- `data/products.js`

最安全做法是：保持旧图片文件名不变，用新图片覆盖旧图片。

只有在你要新增产品图片、改变某个 Products 产品的独立图片路径时，才需要修改 `data/products.js`。

## 快速定位

- 想替换首页 Hero 图：看“二、首页图片替换说明”的 Hero 三张背景图。
- 想替换首页 Reliable Material Partner 背景图：看“二、首页图片替换说明”的 `Reliable Material Partner 背景图`，当前路径是 `bg.png`。
- 想替换首页产品目录 8 张图：看“二、首页图片替换说明”的 `Our Products & Material Solutions` 相关行。
- 想替换 About Us 团队滚动图：看“三、About Us 页面图片替换说明”的 Team Gallery。
- 想替换 Products 页面某个产品图：看“四、Products 页面图片替换说明”的产品图片表。
- 想替换 Logo：看“六、Logo 替换说明”。
