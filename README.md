# git-md-pages

Markdown を配置するだけで、一覧・検索・パンくず付きの静的ドキュメントサイトを生成する CLI / ライブラリです。

## Install

```bash
npm install -D git-md-pages
```

## Usage

```bash
npx git-md-pages build
```

または `package.json`:

```json
{
  "scripts": {
    "docs:build": "git-md-pages build"
  }
}
```

## Config

プロジェクトルートに `git-md-pages.config.mjs` を置きます。

```js
export default {
  siteName: "My Docs",
  docsDir: "docs",
  outDir: "dist",
  basePath: "/my-docs/",
  github: {
    repoUrl: "https://github.com/owner/repo",
    branch: "main",
  },
  theme: {
    customCss: "./docs-theme.css",
  },
};
```

## Theme

デフォルトテーマは内蔵です。見た目を変えたい場合は `theme.customCss` で CSS を後勝ちで読み込めます。

## Library API

```js
import { buildSite } from "git-md-pages";

await buildSite({
  rootDir: process.cwd(),
  docsDir: "docs",
  outDir: "dist",
});
```
