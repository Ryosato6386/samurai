// #11
// 業務開始（関数定義）
const morningAutomation = () =>{
    console.log("おはようございます、業務開始いたします！");
}

// 昼休憩（関数定義）
const lunchBreak = () =>{
    console.log("お昼に行ってきます！");
    console.log("戻りました！");
}

// 日報（関数定義）
function eveningAutomation() {
    console.log("業務内容");
    console.log("明日の予定");
    console.log("所感");
}

// 出力
morningAutomation();
lunchBreak();
eveningAutomation();


// #12
// 商品の値段"price"に、手数料500円を加算した、計算結果を出力する(関数の定義)
const totalPrice = (price) => {
    console.log(price + 500 + "円");
}
// 引数に値を与える
totalPrice(1500);

// 引数が複数ある場合
const netShopping = (price1,price2) => {
    console.log(price1 + price2 + "円");
}
// 先頭から順に引数の値を割り当てる
netShopping(500,500);



// #13
// スコープ({}の位置によって変数が使えるか変わるので注意！)
// {}外で定義　=使える　、　{}内で定義　={}内のみ使える

// {}外でも変数が使えるスコープ({}の外で定義)
const out = "外で変数定義"
const OK = () => {
    console.log("Outが使える");
}
    console.log("Outが使える");

// {}内でしか変数が使えない（{}内で定義）
const NG = () => {
    const in = "内で変数定義";
    console.log("inが使える");
}
    console.log("inが使えない");