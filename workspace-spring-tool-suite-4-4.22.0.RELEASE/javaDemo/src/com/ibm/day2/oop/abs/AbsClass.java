package com.ibm.day2.oop.abs;

//methods are instructions

public class AbsClass {
    // features-fields
	//functionalities-methods
	
	// concrete method(normal methods)- have both method signature and method body
	public void doKyc() {//method signature- what does it do
		//method body-how does it do it
		System.out.println("do kyc");
	}
	
	//abstract methods- only have method signature
	//can only be created in abstract class/interface only!
	public abstract void doooookyc();
}
