package com.ibm.day4.str;

public class StringDemo {
     public static void main(String[] args) {
    	 String str="abc";
    	 int num=10;
    	 String str2=new String("abcd");
    	 String sample=	String.valueOf(str2);
    	 System.out.println(sample);
    	 char[] chArray= str.toCharArray();
    	 System.out.println(chArray);
    	 String str3=str.toUpperCase();
    	 String str4=str2.toLowerCase();
    	 System.out.println(str3);
    	 System.out.println(str4);
    	 String str5="rty";
    	 String str6="tyu";
    	 System.out.println(str5.equalsIgnoreCase(str6));
    	 String str7=str5.concat(str6);
    	 System.out.println(str7);
    	 System.out.println(str7.codePointAt(0));
         
    	 
    	 
     }
}
