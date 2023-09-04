package Kadai;

public class Kadai004 {
	
    public static void main(String[] args) {
        // テストを受けた人と点数の配列
        String[] names = {"Aさん", "Bさん", "Cさん", "Dさん", "Eさん", "Fさん", "Gさん", "Hさん", "Iさん", "Jさん"};
        int[] scores = {10, 20, 30, 40, 50, 60, 70, 80, 90, 100};

        // テストを受けた人と点数を出力
        for (int i = 0; i < names.length; i++) {
            System.out.println(names[i] + "の点数は" + scores[i] + "点");
        }

        // 平均点を計算
        double total = 0;
        for (int score : scores) {
            total += score;
        }
        double average = total / scores.length;

        // 平均点を出力
        System.out.println("テストの平均点は" + average + "点");
    }
}