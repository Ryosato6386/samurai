// 1つのものを細分化してカテゴリ分けするのに使う
// オブジェクトの宣言と代入 
const CurrentPlace = {Prefecture: "saitama Prefecture", City: "Turugasima City", Time: "3:00PM" };

// オブジェクトの中身の出力
console.log(CurrentPlace);

// ”Prefecture”の値を更新
CurrentPlace.Prefecture = "Saitama Prefecture";

// ”mm/dd”を追加
CurrentPlace.day = "04,08"

// ”City”のみを出力
console.log("now: " + CurrentPlace.City);