package com.ibm.day1;

public class Basics {
	public static void main(String[] args) {
		int stdId=100;
		String firstName="Diya";
		String lastName="Takkar";
		double cgpa=7.26;
		System.out.println("student id: " + stdId);
		System.out.println("Name: " + firstName + " " + lastName);
		System.out.println("cgpa: "+  cgpa);
		
		short s1= 10;
		short s2= 20;
		byte s3= (byte)s1; //explicit typecasting
		System.out.println(s3);
		
		int[] marks= {23,24,25}; //arrays
		String[] name= {"Diya","Kartik","ishan"};
		System.out.println(marks[0]);
		
		int num1=10;
		int num2=20;
		System.out.println(num1>num2);
		System.out.println(num1>=num2);
		System.out.println(num1<num2);
		System.out.println(num1>=num2);
		System.out.println(num1!=num2);
		
		int num=10;
		char ch= 'a';
		System.out.println(num+ch);
		
		
		
	}

}