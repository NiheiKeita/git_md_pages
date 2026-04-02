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

メンテナ向けの release は semver タグで行います。`.github/workflows/release.yml` は以下を自動で実行します。

- `package.json` の `version` とタグの整合チェック
- `npm run check` / `npm test` / `npm pack --dry-run`
- npm への publish
- GitHub Release の作成

```bash
git tag v1.0.0
git push origin v1.0.0
```

プレリリース相当なら `v1.0.0-r1` のようなタグも使えます。`package.json` の `version` とタグは一致している必要があります。

GitHub Actions 側で追加の secret は不要です。npm 側でこの repository と `.github/workflows/release.yml` を Trusted Publisher として登録してください。

Trusted Publisher には以下を設定します。

- Repository: `NiheiKeita/mdocbuilder`
- Workflow file: `.github/workflows/release.yml`
- Environment: なし

もし Trusted Publisher を使わずにトークン publish に切り替えるなら、GitHub secret `NPM_TOKEN` を作成し、publish step に `NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }}` を渡します。
