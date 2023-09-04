// numに任意の数値を代入
let num = 3; 

// // if文での出力
// if (num % 3 === 0 && num % 5 === 0) {
//     console.log("3と5の倍数です")
// }
// else if (num % 5 === 0){
//     console.log("5の倍数です")
// }
// else if (num % 3 === 0){
//     console.log("3倍数です")
// }    
// else{
//     console.log(num)
// }



// swith文での出力(自己学習)
// swith文では変数に演算したものを入れてから使用する必要がある
let baisu3 = num % 3 === 0;
let baisu5 = num % 5 === 0;
let baisuAnd = num % 3 === 0 && num % 5 === 0;

switch (num){
    case baisu3:
        console.log("3の倍数です")
        brake;

    case baisu5:
        console.log("5の倍数です")
        brake;

    case baisuAnd:
        console.log("3と5の倍数です")
        brake;

    default:
        console.log(num)
}