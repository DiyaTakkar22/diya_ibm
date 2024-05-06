package com.ibm.day3.collections;

// How to use an abstract method from an interface? - 

class ConcreteClass implements FunInterface {

	@Override
	public void funMethod() {
		System.out.println("abstract method implemented in a concrete class");
	}

//	@Override
//	public void anotherAbstractMethod() {
//		System.out.println("another abstract method implemented in a concrete class");
//	}

}

public class InnerDemo {

	public static void main(String[] args) {

		 //option 1 - use it via a concrete class 
		ConcreteClass obj1 = new ConcreteClass();
		obj1.funMethod();
//		obj1.anotherAbstractMethod();

		 //option 2 - use it via a anonymous inner class
		FunInterface obj2 = new FunInterface() {
			@Override
			public void funMethod() {
				System.out.println("abstract method implemented in an inner class");
			}

//			@Override
//			public void anotherAbstractMethod() {
//				System.out.println("another abstract method implemented in an inner class");
//			}
		};

		obj2.funMethod();
//		obj2.anotherAbstractMethod();

		// option 3 - use it via a lambda expression / lambda method 
		 //(only for functional interface)

		FunInterface obj3 = () -> {
			System.out.println("abstract method implemented with lambda");
		};

		obj3.funMethod();

	}

}