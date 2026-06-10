# 网站 SEO 发布检查清单

这份清单给不懂代码的人使用。网站发布前和发布后，可以按下面步骤检查。

## 一、发布前要检查什么

1. 网站能正常打开：首页、About Us、Products、Contact Us、Thank You 页面都能访问。
2. 页面没有破图，Logo、产品图、展会图都能显示。
3. Contact Us 表单仍然提交到 `https://formsubmit.co/xunpan@hopexm.com`。
4. 页面展示邮箱仍然是 `andy.meiling@hopexm.com`。
5. 导航栏、产品分类、中英文/多语言切换正常。
6. Products 页面分类和产品详情能正常切换。
7. 所有页面都没有 `noindex`。

## 二、sitemap.xml 在哪里

文件位置：

```text
E:\Codex\pictures\sitemap.xml
```

线上发布后地址应该是：

```text
https://www.hopexm.com/sitemap.xml
```

当前 sitemap 只提交主要页面 URL：

- `https://www.hopexm.com/`
- `https://www.hopexm.com/index.html`
- `https://www.hopexm.com/about.html`
- `https://www.hopexm.com/products.html`
- `https://www.hopexm.com/contact.html`
- `https://www.hopexm.com/thanks.html`

当前网站多语言是通过 JavaScript 切换，同一个页面 URL 不变，所以 sitemap 暂时不要加入大量 `?lang=en`、`?lang=zh`、`?lang=ja` 这类重复 URL，避免 Google 判断为重复内容。

未来如果要做更强 SEO，可以为每种语言生成独立静态路径，例如 `/en/`、`/zh/`、`/ja/`、`/de/`，那时再配置完整 `hreflang`。

## 三、robots.txt 在哪里

文件位置：

```text
E:\Codex\pictures\robots.txt
```

线上发布后地址应该是：

```text
https://www.hopexm.com/robots.txt
```

当前内容允许搜索引擎抓取全站，并指向 sitemap：

```text
User-agent: *
Allow: /

Sitemap: https://www.hopexm.com/sitemap.xml
```

注意：不要写 `Disallow: /`，否则会阻止搜索引擎抓取整个网站。

## 四、title 和 description 在哪里

每个页面的 SEO 标题和描述都在对应 HTML 文件顶部的 `<head>` 里：

- 首页：`index.html`
- About 页面：`about.html`
- Products 页面：`products.html`
- Contact 页面：`contact.html`
- Thanks 页面：`thanks.html`

主要标签是：

```html
<title>...</title>
<meta name="description" content="...">
```

以后修改时，标题要简洁，描述要自然说明页面内容，不要堆关键词。

## 五、图片 alt 怎么检查

图片 alt 是给搜索引擎和无障碍阅读使用的说明文字。

检查方法：

1. 打开 HTML 文件。
2. 搜索 `<img`。
3. 看图片是否有 `alt="..."`。

好的 alt 示例：

- `Artificial leather material sample`
- `Industrial pigment color paste`
- `PU resin material solution`
- `Release paper for synthetic leather`
- `Fabric backing material for artificial leather`
- `Customer meeting at international exhibition`

不要这样写：

- `image`
- `pic`
- `best artificial leather material pigment resin release paper supplier no.1`

alt 要自然，不要堆关键词。

## 六、Google Search Console 怎么提交

网站上线到 `https://www.hopexm.com` 后：

1. 打开 [Google Search Console](https://search.google.com/search-console)。
2. 添加资源，建议选择“网域”或“网址前缀”。
3. 按 Google 提示验证域名所有权。
4. 验证成功后，进入“站点地图”。
5. 提交：

```text
https://www.hopexm.com/sitemap.xml
```

6. 等待 Google 抓取。

## 七、发布后如何验证是否被收录

Google 收录不是马上完成，通常需要几天到几周。

可以在 Google 搜索：

```text
site:hopexm.com
```

也可以搜索：

```text
site:www.hopexm.com
```

如果看到网站页面，说明已经有页面被 Google 收录。

## 八、如何检查单个页面是否能被 Google 访问

在 Google Search Console 里使用“网址检查”：

1. 输入页面 URL，例如：

```text
https://www.hopexm.com/products.html
```

2. 点击检查。
3. 如果提示可编入索引，就可以请求编入索引。

## 九、后续新增产品时 SEO 字段怎么填

新增产品主要修改：

```text
data/products.js
```

每个产品最好有这些字段：

- `name`：产品名称
- `shortDescription`：简短介绍
- `description`：详细介绍
- `applications`：应用场景
- `alt`：产品图片说明
- `seoTitle`：产品 SEO 标题
- `seoDescription`：产品 SEO 描述

写法建议：

1. 产品名称清楚准确。
2. 描述自然说明材料用途、特点和应用。
3. 不要使用夸张绝对化词语，例如 `best`、`No.1`、`guaranteed`。
4. 不要堆关键词。
5. 如果某个语言暂时不会写，可以先留空，网站会 fallback 到英文。

## 十、不要堆砌关键词

SEO 不是关键词越多越好。

不要在页面里反复堆：

```text
artificial leather material, artificial leather material, artificial leather material
```

更好的写法是自然描述：

```text
We supply material solutions for artificial leather, coatings, textile and industrial applications, including colorants, silicone additives, PU resin and release paper.
```

## 十一、多语言 SEO 说明

当前网站多语言通过 JavaScript 切换，页面 URL 不变。

所以现在：

1. 不配置复杂 `hreflang`。
2. sitemap 只提交主要页面 URL。
3. `html lang` 会随当前语言切换。
4. 阿拉伯语会使用 `dir="rtl"`。
5. 其它语言使用 `dir="ltr"`。

未来如果希望多语言 SEO 更强，可以考虑为每种语言生成独立页面或独立路径，例如：

- `/en/`
- `/zh/`
- `/ja/`
- `/de/`

那时再添加完整 `hreflang`。

## 十二、上线后建议检查

1. 打开 `https://www.hopexm.com/robots.txt`，确认能看到 robots 内容。
2. 打开 `https://www.hopexm.com/sitemap.xml`，确认能看到 sitemap 内容。
3. 打开首页，按 `Ctrl + U` 查看源代码，确认有 `<title>` 和 `<meta name="description">`。
4. 打开 Google Search Console 提交 sitemap。
5. 用 `site:hopexm.com` 定期检查收录。
6. 新增产品后，检查 Products 页面是否显示，产品图片是否有 alt。
