package com.ibm.day4.anno;


// you can create your own annotations as well
//annotations can be used for classes, interfaces, methods, variables , objects, enums, arrays etc.

@interface MyAnon{
	
}
@MyAnon{val="ans"}


@FunctionalInterface
interface Int{
		void m1();
}



class C1 implements Int{
	
	@Override
	public void m1() {
		
	}
}

public class AnnotationDemo {
  public static void main(String[] args) {
	  
  }
}
