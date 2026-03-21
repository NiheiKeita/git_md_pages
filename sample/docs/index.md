---
title: mdocbuilder
description: Markdown から一覧・検索・パンくず付きのドキュメントサイトを生成するサンプルです。
---

# mdocbuilder

Markdown を `docs/` に置くだけで、検索しやすく読みやすいドキュメントサイトとして公開するためのサンプルです。

まずは `guides/` を見れば導入から使い方まで追えます。`reference/` には設定や内部実装の説明、`test/` には自動インデックスの挙動例を置いています。

## まず見るページ

- [はじめに](./guides/getting-started.md)
- [検索を試す](./guides/search.md)
- [設定リファレンス](./reference/config.md)
- [自動インデックスの例](./test/)

## セクション一覧

{{mdocbuildindex}}

## このサンプルで確認できること

- タイトル自動抽出
- パンくず
- 一覧ページ
- クライアントサイド検索
- `index.md` が無いディレクトリの自動インデックス
- コードブロック、テーブル、blockquote の見た目
