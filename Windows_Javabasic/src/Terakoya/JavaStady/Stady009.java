package JavaStady;

public class Stady009 {
	public static void main(String[] args) {
		
		for( int i = 1; i < 11; i++ ) {
		    System.out.println(i);
		    
//		    continue文
		    if (i == 5) {
		    	System.out.println("次の繰り返し処理を実行します");
		    	continue;
		    }
		    
//		    break文
		    if (i == 9) {
		    	System.out.println("繰り返し処理を終了します");
		    	break;
		    }
		}
		
	}

}
