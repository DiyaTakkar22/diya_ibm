package oop;

public class EncapDemo {
   public static void main(String[] args) {
	   Employee emp=new Employee();
	   emp.salary=10.5;
	   emp.setSalary(10.5);
	   System.out.println(emp.getSalary());
   }
}
