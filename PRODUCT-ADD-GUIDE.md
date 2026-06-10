# 产品新增说明

以后新增、修改 Products 页面产品，主要改这个文件：

```text
data/products.js
```

网站仍然是纯静态 HTML + CSS + JavaScript，不需要改 React、Vue，也不需要改页面结构。

## 图片放哪里

产品图片建议统一放在：

```text
assets/products/
```

图片文件名建议使用英文小写和短横线，例如：

```text
assets/products/silicone-leveling-agent.webp
assets/products/new-product-name.webp
```

建议优先使用 `.webp`，也可以用 `.jpg` 或 `.png`，但代码里的路径必须和真实文件名完全一致。

## 新增产品改哪里

打开：

```text
data/products.js
```

找到 `productRows` 这一段，在对应分类下面复制一行产品记录。

同时在 `productNames` 里增加这个产品的多语言名称。

如果只是先上线英文，也可以先只认真填写英文，其他语言可以先留空或暂时用英文。网站会自动 fallback 到英文，不会显示空白。

## 字段是什么意思

- `id` / `slug`：产品唯一编号，用英文小写和短横线，例如 `silicone-leveling-agent`。
- `category`：所属一级分类，例如 `silicone-additives`。
- `image`：产品自己的图片路径。
- `useCategoryImage`：如果没有单独图片，会自动用分类代表图。
- `name`：产品名称，多语言。
- `shortDescription`：短介绍。
- `description`：详细介绍。
- `applications`：应用场景列表。
- `seoTitle`：搜索引擎标题。
- `seoDescription`：搜索引擎描述。

## 哪些字段必须填写

建议至少填写：

- `slug`
- `category`
- `name.en`
- `shortDescription.en`
- `description.en`
- `applications.en`
- `image` 或者让它使用分类代表图

## 哪些语言可以先留空

这些语言都可以先留空：

```text
zhTW, ar, id, ms, pt, fr, ja, ru, de, ko
```

如果某个语言为空，网站会自动显示英文内容。

## 新增后怎么检查

1. 保存 `data/products.js`。
2. 本地启动服务器：

```powershell
cd E:\Codex\pictures
python -m http.server 8000
```

3. 打开：

```text
http://localhost:8000/products.html
```

4. 切换语言，检查产品是否显示。
5. 点击对应分类，检查左侧二级产品列表和右侧产品详情。

## 如果产品不显示，检查这些地方

- `slug` 是否重复。
- `category` 是否写对。
- 图片路径是否真实存在。
- 英文逗号、引号、括号是否完整。
- `data/products.js` 是否保存成功。
- 浏览器是否需要 `Ctrl + F5` 强制刷新。
