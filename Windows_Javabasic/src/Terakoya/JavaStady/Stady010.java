package JavaStady;

public class Stady010 {
	public static void main(String[] args) {
		
        int dice = 1; // サイコロの目

        // 6が出るまでサイコロを振り続ける
        while( dice != 6 ) {
            // サイコロを振る(1～6の目をランダムで生成)
            dice = (int)( Math.ceil( Math.random() * 6 ) );
            System.out.println("サイコロの目は" + dice);
        }
		
		
	}

}
