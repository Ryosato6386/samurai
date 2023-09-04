package JavaStady;

public class Stady014 {
	public static void main(String[] args) {
		
		// 【メソッド】注文を受けて在庫数を更新する
		// number：注文数
		public void takeOrder( final int number ) {
		    System.out.println("【注文処理開始】");
		    System.out.println("商品名：" + this.name );
		    System.out.println("単品価格：" + this.price + "円（税込）" );
		    System.out.println("注文数：" + number + "／在庫数：" + this.stock );

		    // 注文数が在庫数を超えていたら購入不可
		    if( this.stock < number ) {
		        System.out.println( this.name + "は在庫不足です" );
		        return; // 購入できないため終了
		    }

		    // 購入金額を計算
		    int total = this.price * number;
		    System.out.println( number + "点で合計" + total + "円（税込）です");

		    // 購入のため在庫数を更新
		    this.stock -= number;
		    System.out.println( this.name + "の残り在庫は" + this.stock );
		}
		
}
