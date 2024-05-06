package com.ibm.day3.collections;
import java.util.ArrayList;
import java.util.List;

//collections accept only objects

public class CollectionsDemo {
   public static void main(String[] args) {
	   ArrayList<String> friendlist= new ArrayList<>();
	   System.out.println(friendlist.size());
	   friendlist.add("Sonu");
	   friendlist.add("Tonu");
	   friendlist.add("Monu");
	   
	   System.out.println(friendlist);
	   System.out.println(friendlist.size());
	   friendlist.remove(0);
	   System.out.println(friendlist);
	   System.out.println(friendlist.size());
	   
	   
	   
	   
   }
}
