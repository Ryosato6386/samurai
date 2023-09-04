// ＃6章
// 算術演算子の戻り値
console.log(45 + 18);
// 比較演算子の戻り値
console.log(45 > 18);

// 等価演算子（2つの値が等しいかどうか）
console.log("5" == 5);
// 厳密演算子（2つの値の値とデータ型が等しいかs）
console.log("5" === 5);


// 変数に0〜4までのランダムな整数を代入
let num = Math.floor(Math.random() * 5);
// 変数の値を出力
console.log(num);
// 変数の値が4であれば「大当たりです」と出力する、それ以外は「ハズレです」と出力
if(num === 4){
    console.log("大当たりです");
}
else{
    console.log("ハズレです");
}


// ＃7章
// 整数numに0〜4のランダムな整数を代入
num = Math.floor(Math.random() * 5)
// 代入された整数numの値を出力する（確認用）
console.log(num);

// 変数numの値によって、出力される文字列を切り替える
switch (num){
    case 2:
        console.log('ザコ')
        break;
    case 3:
        console.log('ふつう。')
        break;
    case 4:
        console.log('まぁまぁだね')
        break;
}