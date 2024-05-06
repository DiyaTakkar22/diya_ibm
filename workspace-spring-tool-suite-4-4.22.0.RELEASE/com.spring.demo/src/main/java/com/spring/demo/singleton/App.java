package com.spring.demo.singleton;

/**
 * Hello world!
 *
 */
public class App 
{
	
    public static void main( String[] args )
    {
     
        Prime  obj=Prime.getInstance();  //new way to create an object: singleton design pattern
        Prime  obj2=Prime.getInstance();
        System.out.println( obj );
        System.out.println( obj2);
        System.out.println( obj.equals(obj2));
        
        
        
    }
}
