package com.ibm.day4.newfeatures;
//1. switch case

public class Java13NewFeatures {
	public static void main(String[] args) {
		System.out.println("switch expression");
	
//		String adjective = "";
//		switch (firstName) {
//		case "A":
//			adjective = "Attractive";
//			break;
//		case "B":
//			adjective = "Beautiful";
//			break;
//		case "C":
//			adjective = "Charming";
//			break;
//
//		default:
//			adjective = "Zzzz";
//		}
		String firstName="B";
		String adjective=switch (firstName) {
		   case "A" -> "Attractive";
		   case "B" -> "Beautiful";
		   case "C" -> "Charming";
		   default -> "Zealous";
		   
		   
		};
	   System.out.println(firstName);
	   System.out.println(adjective);
		
	}
  
}
