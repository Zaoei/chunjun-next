## 纯钧官网 Next.js 重构版本

### 一. 项目信息

1. 基础框架: [Next.js](https://www.nextjs.cn/)
2. 包管理器: [pnpm](https://www.pnpm.cn/)
3. UI 组件: [Mantine](https://mantine.dev/)
4. CSS: [Tailwind CSS](https://www.tailwindcss.cn/)
5. 开发语言: [TypeScript](https://www.tslang.cn/)

### 二. 为什么会有这个版本？

&nbsp;&nbsp;众所周知，纯钧已经有了一个[官网](https://dtstack.github.io/chunjun/)，那么为什么还会有这个所谓的 Next.js 重构的版本呢？答案其实很简单：我们对之前的版本并不满意。因为不管是从开发上来看还是从实际使用体验上来看都又很多不尽人意的地方，所以才会有这个使用 nextjs 重构的版本。

### 三. 新的风格

1. 清晰
2. 明亮
3. 内敛
4. 留白

### 四. 部署

- 方法 1: 在 dtstack/chunjun 内 clone 的项目下，在 website 目录内安装好 npm 依赖并执行 npm run deploy。

- 方法 2: 在 dtstack/chunjun 内 clone 的项目下，在 website 目录内安装好 npm 依赖并执行 npm run build，然后将 out 内的代码提交到 chunjun 的 ph-pages 分支

### 国际化

国际化使用的是 next-intl 插件，地址：https://next-intl-docs.vercel.app/docs/usage/messages#rich-text

#### 文档目录
- i18n (翻译文件)
- docs_zh （中文文档）
- docs_en (English)

注意： `dos_zh` 和 `docs_en` 用来分别存储**中文**和**英文**文档的源文件
