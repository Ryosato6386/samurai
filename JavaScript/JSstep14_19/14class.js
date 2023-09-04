// クラスの定義
class product{
    // コンストラクタでインスタン化のときに初期化させる
    constructor(name, price, category){
    
    // インスタンスにプロパティー（情報）を持たせる
    this.name = name;
    this.price = price;
    this.category = category;
    }

        // メソッドの定義
    summary(){
        console.log("商品名: " + this.name + " / 値段: " + this.price + " / カテゴリ: " + this.category);
    }

}

    // インスタンス化
    const ihone12 = new product("アイフォン12", 1000, "電化製品");
    const coffee = new product("コーヒー", 300, "食料品");

    // インスタンスの値を出力
    console.log(ihone12);
    console.log(coffee);

    // メソッドの実行
    ihone12.summary();


// ---通常のオブジェクトにメソッドを定義---
const XmasMan = {
    Name: "サンタクロース",
    old: 23,
    gender: "男性",
    // メソッド定義
    comment: () => {
        console.log("メリークリスマス")
    }
}
    // メソッド実行
    XmasMan.comment();