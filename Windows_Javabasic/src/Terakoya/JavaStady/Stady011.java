package JavaStady;

public class Stady011 {
	public static void main(String[] args) {
		
		
//        拡張for文		
//		データ型[] 配列名 = new データ型[要素数];
//		int[] scoreArray = new int[5];
		
//		点数
		int[] scoreArray = { 70, 85, 80, 95, 90 }; 
		
//      scoreArray[0]～[4]の値を順番に表示
        // scoreArrayの各要素を順番に表示
        for( int score : scoreArray ) {
            System.out.println(score);
        }   
		
	}
}
