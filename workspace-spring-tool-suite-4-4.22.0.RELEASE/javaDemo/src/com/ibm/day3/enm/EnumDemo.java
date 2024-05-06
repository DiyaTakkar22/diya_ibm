package com.ibm.day3.enm;



public class EnumDemo {

	public static void main(String[] args) {

//		String today = "Friday";
//		System.out.println(today);
//		today = "Driday"; // Wrong!
//		System.out.println(today);

		DayOfWeek today = DayOfWeek.FRIDAY;
		System.out.println(today);
		today = DayOfWeek.SATURDAY;
		System.out.println(today);
	}

}

//package com.ibm.day3.enm;
//
//public class EnumDemo {
//
//	// final field - reassignment not possible
//	// final method - can not be overridden
//	// final class - can not be extended
//	private static final int NUM = 10;
//
//	public static void main(String[] args) {
//
//		System.out.println(num);
//
////		num = 20;
//
//		System.out.println(num);
//	}
//
//}