package com.ibm.day2;

public class ClassDemo {
	
	//class members- variables, methods,constructors
	
	static double finalBillAmount; //class level static field
	double var; //class level- instance field
	
	
	//method returns nothing a.k.a void
    static void gstBillPrint(double amount) {
    	double gst=18; //local variable
    	double billAmount=amount + (amount*(gst/100));
    	System.out.println(billAmount);
    }
    //method returns double var
    static double gstBillCalc(double amount) {
    	double gst=18;
    	double billAmount=amount + (amount*(gst/100));
    	return billAmount;
    	
    }
    //method takes two args
    static double gstPctCalc(double amount, double gst) {
        double billAmount = amount + (amount * (gst / 100));
        return billAmount;
    }
    
    
    //calling the method
    public static void main(String[] args) {
    	ClassDemo.gstBillPrint(350);   
    	ClassDemo.gstBillPrint(500);
    	ClassDemo.gstBillPrint(950);
    	double finalAmount=ClassDemo.gstPctCalc(200,6);
    	System.out.println(finalAmount);
    	double finalAmount2=ClassDemo.gstPctCalc(200,18);
    	System.out.println(finalAmount2);
    	double finalAmount3=ClassDemo.gstPctCalc(200,12);
    	System.out.println(finalAmount3);


    }
}
