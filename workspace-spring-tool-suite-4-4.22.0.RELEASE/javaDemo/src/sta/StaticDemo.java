package sta;

public class StaticDemo {
      public static void main(String[] args) {
    	  int result1= Calc.addNum(1,14);
    	  System.out.println(result1);
    	  Calc cal=new Calc();
    	  int result2=cal.subNum(24,23); //create and object first; then call the non static method
    	  System.out.println(result2);
      }
}
