# gitについて

## ＜githubアクセストークン作成＞<br>
「Settings」→「Developer settings」→「Personal access tokens」→「Generate new token」<br>
「Note」に説明、「repo」がつくものをチェック、「Generate token」ボタンクリックで作成<br>
**【現在のトークン】**<br>
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

## 主に使用するコマンド

`git clone`<br>
リモートリポジトリのデータをローカル環境に持ってくる

### githubに保存する
`git add .`<br>
編集内容を追加

`git commit -m"coment"`<br>
addで追加したものを保存する

`git push URL`<br>
commitでローカルに保存したものをリモートリポジトリに保存する

### リモートリポジトリ→ローカルにデータを落とす
**【手順】**
1. fetch
    1. marge<br>
**or**
1. push

`git fetch URL`<br>
`git fetch origin master`<br>
リモートの「master」ブランチ → ローカルの「origin/master」ブランチ

`git merge URL`<br>
`git merge origin/master`<br>
ローカルの「origin/master」ブランチ → ローカルの「master」ブランチ

`git pull URL`<br>
`git pull origin master`<br>
mergeとfetchを同時に行う（コンフリクトが起きやすいので注意）

### 【補足】
- **origin**とは、githubでデフォルトとして設定されたブランチのことを指す
- URLとブランチを指定する違い
    - URL：そのURLのリポジトリを指したいとき
    - ブランチ：ブランチ単位で指定したいとき（通常）



### その他
`git status`<br>
ローカルリポジトリの状態の確認

`mkdir dirName`<br>
ディレクトリを作成する



アップストリームブランチとは