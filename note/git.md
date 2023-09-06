# gitについて

## ＜githubアクセストークン作成＞<br>
「Settings」→「Developer settings」→「Personal access tokens」→「Generate new token」<br>
「Note」に説明、「repo」がつくものをチェック、「Generate token」ボタンクリックで作成<br>
**【現在のトークン】**<br>
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

## 主に使用するコマンド

**git clone**<br>
リモートリポジトリのデータをローカル環境に持ってくる

**git add .**<br>
編集内容を追加

**git commit -m"coment"**<br>
addで追加したものを保存する

**git push URL**<br>
commitでローカルに保存したものをリモートリポジトリに保存する

**git pull URL**<br>
mergeとフォルスを同時に行う（コンフリクトが起きやすいので注意）

**git status**<br>
ローカルリポジトリの状態の確認

**mkdir dirName**<br>
ディレクトリを作成する


git fetch、git merge、git pullの違い