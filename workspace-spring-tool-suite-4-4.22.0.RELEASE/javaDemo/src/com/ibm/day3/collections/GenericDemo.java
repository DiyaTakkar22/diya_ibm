package com.ibm.day3.collections;



import java.util.ArrayList;

public class GenericDemo {

	public static void main(String[] args) {

//		ArrayList friendsList = new ArrayList(); // not good 
		ArrayList<String> friendsList = new ArrayList<>(); // good
		System.out.println(friendsList.size()); // 0

		friendsList.add("Sonu");
		System.out.println(friendsList);
		System.out.println(friendsList.size()); // 3

//		friendsList.add(1045); // CE
//		friendsList.add(false); // CE

		System.out.println(friendsList);
		System.out.println(friendsList.size()); // 3

	}

}