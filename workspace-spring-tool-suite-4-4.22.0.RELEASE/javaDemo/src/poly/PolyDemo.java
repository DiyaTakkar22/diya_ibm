package poly;



//polymorphism - 

//method overloading - multiple methods with same name, 
//having different parameters 

//method overriding - method from a super class 
//is overridden by a sub lass 

public class PolyDemo {

	public static void main(String[] args) {

		CalcDemo calc = new CalcDemo();
		System.out.println(calc.addNums(10, 20));
		System.out.println(calc.addNums(10, 20, 30));

	}

}