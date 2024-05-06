package com.ibm.day1;

import java.util.Scanner;

public class assessment {
     public static void main(String[] args) {
    	 
  
    	
    	 
    	 Scanner scn = new Scanner(System.in);
    	 System.out.println("enter berth number");
    	 int berthNumber=scn.nextInt();
    	 scn.close();
    	 int compartment=(berthNumber)-1/8+1;
      	 String berthType=""; //lower middle upper side-upper side-lower
      	 int positioninCompartment=(berthNumber-1)%8+1
    	 
    	 if (positioninCompartment==1 || positioninCompartment==4) {
    		 System.out.println("your berth number is: " + berthNumber + "your berth type is: upper berth " );
    		 
    	 }
    	 else if (position) {
    		 System.out.println("your berth number is: " + berthNumber + "your berth type is: middle berth " );
    	 
     }
    	 else if () {
    		 System.out.println("your berth number is: " + berthNumber + "your berth type is: lower berth " );
    	 
     }
    	 else {
    		 System.out.println("");
    	 }
    	 
    	 
}
}
