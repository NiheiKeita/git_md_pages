# mdocbuilder

Markdown を配置するだけで、一覧・検索・パンくず付きの静的ドキュメントサイトを生成する CLI / ライブラリです。

TypeScript の型定義を同梱しているので、ライブラリとして import して使う場合も補完が効きます。

この repository 自体でも、利用例は `sample/` に分けています。ライブラリ本体と、実際に `npm install` して使う側を分離して見られます。

## Install

```bash
npm install -D mdocbuilder
```

## Usage

```bash
npx mdocbuilder build
```

または `package.json`:

```json
{
  "scripts": {
    "docs:build": "mdocbuilder build"
  }
}
```

## Config

プロジェクトルートに `mdocbuilder.config.mjs` を置きます。

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

## Sample

この repo では sample プロジェクトを `sample/` に置いています。

```bash
npm run sample:build
```

これで `sample/package.json` からローカルの `mdocbuilder` を install し、`sample/docs/` を build します。

## Library API

```js
import { buildSite } from "mdocbuilder";

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

GitHub Actions から npm publish するには、npm 側でこの repository と `.github/workflows/release.yml` を Trusted Publisher として登録してください。
