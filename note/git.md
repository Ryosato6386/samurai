# gitについて

## ＜githubアクセストークン作成＞<br>
「Settings」→「Developer settings」→「Personal access tokens」→「Generate new token」<br>
「Note」に説明、「repo」がつくものをチェック、「Generate token」ボタンクリックで作成<br>
**【現在のトークン】**<br>
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

## 主に使用するコマンド

`git clone`
リモートリポジトリのデータをローカル環境に持ってくる

### githubに保存する
`git add .`
編集内容を追加

`git commit -m"coment"`
addで追加したものを保存する

`git push URL`
commitでローカルに保存したものをリモートリポジトリに保存する

### リモートリポジトリ→ローカルにデータを落とす
**【手順】**
1. fetch
2. marge
**or**
1. push

`git fetch URL`
`git fetch origin master`
リモートの「master」ブランチ → ローカルの「origin/master」ブランチ

`git merge URL`
`git merge origin/master`
ローカルの「origin/master」ブランチ → ローカルの「master」ブランチ

`git pull URL`
`git pull origin master`
mergeとfetchを同時に行う（コンフリクトが起きやすいので注意）

### 【補足】
- **origin**とは、githubでデフォルトとして設定されたブランチのことを指す
- URLとブランチを指定する違い
    - URL：そのURLのリポジトリを指したいとき
    - ブランチ：ブランチ単位で指定したいとき（通常）



### その他
`git status`
ローカルリポジトリの状態の確認

`mkdir dirName`
ディレクトリを作成する



アップストリームブランチとは