## ＜HTML/CSS＞

01〜05
```
<meta charset=“文字のコード（UTF-8）”>
<title>ページのタイトル</title>
<meta name="description" content=“検索エンジンでのページの説明”>
<img src=“画像のパス”>
<a href=“リンク先のコンテンツ”>リンクのボタン要素</a>
```

06〜08
articleタグ、sectionタグは各記事を区切りでまとめることが出来る

09~14
・読み込みたいCSSの指定ができる
<link rel="ファイルとの関係性の説明" href="CSSファイル名">

・CSSのプロパティー
p （どこのタグの）{
  color（どのプロパティーを）: red（どの値にするか）;
}

color	文字色を指定する<br>
font-family	フォントの種類を指定する<br>
font-size	フォントの大きさを指定する<br>
font-weight	フォントの太さを指定する<br>
background	背景を指定する<br>
text-align	横方向の揃え方を指定する（左・右・中央）<br>
line-height	行の高さを指定する<br>
width	要素の幅を指定する<br>
height	要素の高さを指定する<br>
padding	要素のパディングを指定する<br>
margin	要素のマージンを指定する<br>
border	要素のボーダーの色や太さを指定する<br>
position	要素の配置方法を指定する<br>
display	要素の表示形式を指定する<br>

・idとclass
【HTML】
<h1 id="id名">こんにちは</h1>
<p class="class名">今日は</p>
【CSS】
#id名{
    color: red;
}
※補足。。。
セレクタ指定の場所に「#」「.」をつけてセレクタ指定する
「id」は要素を一意に識別するために使われ、
「class」は複数の要素に共通の特性やスタイルを適用するために使う