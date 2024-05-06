package com.ibm.day2.oop.in;
interface govtOfIndia{
	
}
interface StateGovt{
	
}
class Rbi{
	public void payInterest() {
		System.out.println("Pay interest");
	}
}
class Hdfc extends Rbi implements govtOfIndia,StateGovt{
	
}

class Icici extends Rbi implements govtOfIndia, StateGovt{
	
}
public class Bank {
    
}
//one class can implement multiple interfaces
//interfaces- for multiple inheritance
//we can implement interfaces without extending a class
//there can only be abstract methods in an interface
//used for ABSTRACTION