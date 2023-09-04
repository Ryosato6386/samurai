//---while文---
// 変数numに0〜4の数字を代入
let num = Math.floor(Math.random() * 5);

// 最初の変数numの中身を出力(確認用)
console.log("最初の値は" + num + "です");

// 変数numが0以外のとき、numの中身を出力し続ける
while (num !== 0){
    // 変数numに再代入する
    num = Math.floor(Math.random() * 5);

// 2回目以降の変数numの現在の中身を出力
console.log("現在の値は" + num + "です");
}


//---for文---
for(let i = 1; i <=10; i++) {
    console.log(i);
}