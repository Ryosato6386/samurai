# gitについて

## ＜githubアクセストークン作成＞<br>
「Settings」→「Developer settings」→「Personal access tokens」→「Generate new token」
「Note」に説明、「repo」のみのチェックで充分、「Generate token」ボタンで作成<br>
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