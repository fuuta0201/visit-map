# Visit Map

## アプリケーション概要

訪れた場所の記録・可視化を行うアプリケーション

- 位置情報，画像．メッセージ，評価を記録
- 県の地図上に評価によるヒートマップ，散布図を表示する

## 要件定義

本アプリケーションにおける機能を掲載

### 機能一覧

- google でのログイン機能
- 訪れた場所（以降，記事）の投稿機能
- 記事の編集・削除機能
- 記事一覧ページ
  - 記事一覧の表示機能
  - 県，市ごとの絞り込み表示
  - 記事詳細の表示機能
- 可視化ページ
  - 県ごとに絞り込んで表示
  - 地図上に評価によるヒートマップ（散布図）表示
  - 散布図ホバーで記事詳細表示
  - 拡大縮小表示

## 技術選定

| 開発言語       | typescript              |
| -------------- | ----------------------- |
| フレームワーク | Next.js                 |
| CSS            | Tailwind css, shadcn/ui |
| 認証機能       | Next-Auth.js            |
| ORM            | Prisma                  |
| データベース   | supabase(開発は docker) |
| デプロイ       | Vercel                  |
| UI テスト      | Storybook               |

## DB 設計

### users

- ユーザー情報を管理

| カラム名   | 型            | 説明                       |
| ---------- | ------------- | -------------------------- |
| id         | string (UUID) | 主キー（auth ユーザー ID） |
| name       | string        | ユーザー名（任意）         |
| email      | string        | メールアドレス（unique）   |
| image_url  | string        | プロフィール画像 URL       |
| created_at | timestamp     | 登録日時                   |

---

### articles

- 投稿された訪問記録（記事）を管理

| カラム名   | 型        | 説明                                     |
| ---------- | --------- | ---------------------------------------- |
| id         | int (PK)  | 主キー                                   |
| user_id    | string    | 外部キー（[users.id](http://users.id/)） |
| title      | string    | 投稿タイトル                             |
| message    | text      | 投稿内容                                 |
| image_url  | string    | 投稿に添付された画像（1 枚）             |
| rating     | int       | 評価（例：1〜5）                         |
| latitude   | double    | 緯度（Google Maps で使用）               |
| longitude  | double    | 経度                                     |
| prefecture | string    | 都道府県（例：東京都）                   |
| city       | string    | 市区町村（例：新宿区）                   |
| created_at | timestamp | 投稿日時                                 |
| updated_at | timestamp | 更新日時                                 |

---

### sessions（NextAuth が自動で作成）

- セッション情報。Prisma の`adapter`に従って生成されるので手動で定義しない。

---

### accounts（NextAuth が自動で作成）

- 外部認証（Google）の情報保持。これも Prisma で自動生成。

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Prisma for supabase

### DB Migration(テーブルの作成)

```zsh
npx prisma migrate dev --name init_schema
```

### Create Prisma Client

データベースが作成できたら，アプリケーションでデータベースを操作するためのPrisma Clientを作成する．

```zsh
npx prisma generate
```
