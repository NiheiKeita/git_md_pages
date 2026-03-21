# git-md-pages

Markdown を配置するだけで、一覧・検索・パンくず付きの静的ドキュメントサイトを生成する CLI / ライブラリです。

TypeScript の型定義を同梱しているので、ライブラリとして import して使う場合も補完が効きます。

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

## Release

メンテナ向けの release は semver タグで行います。

```bash
git tag v1.0.0
git push origin v1.0.0
```

プレリリース相当なら `v1.0.0-r1` のようなタグも使えます。`package.json` の `version` とタグは一致している必要があります。

GitHub Actions から npm publish するには、npm 側でこの repository と [`release.yml`](/Users/niheikeita/develop/git_md_pages/.github/workflows/release.yml) を Trusted Publisher として登録してください。
