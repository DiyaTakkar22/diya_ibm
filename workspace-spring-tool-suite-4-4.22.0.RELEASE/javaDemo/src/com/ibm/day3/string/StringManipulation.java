package com.ibm.day3.string;



public class StringManipulation {

    public static void main(String[] args) {

        String str = "abcdef";
        System.out.println(str);

        System.out.println(str.length());

        System.out.println(str.charAt(2));

        String username = "vaman";
        String inputtedUsername = "Vaman";

        if (username.equalsIgnoreCase(inputtedUsername)) {
            System.out.println("Valid");
        } else {
            System.out.println("Invalid");
        }
        
        String str1 = "Hello World";
        String upper = str1.toUpperCase(); // upper will be "HELLO WORLD"
        System.out.println(upper);
        
        String str2 = "Hello World";
        int index = str2.indexOf("World"); // index will be 6
        System.out.println(index);
        
        String str3 = "Hello World";
        String sub = str3.substring(6); // sub will be "World"
        System.out.println(sub);

    }
}
