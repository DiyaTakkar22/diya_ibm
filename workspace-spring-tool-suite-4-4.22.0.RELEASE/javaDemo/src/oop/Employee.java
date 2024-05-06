package oop;

public class Employee {

	int employeeId;
	String firstName;
	double salary;

	String getEmployeeData() {
		return "Employee id: " + employeeId + " Name: " + firstName + " salary: " + salary;
	}
	public Employee(int employeeId,String firstName,double salary) {
		super();  
		this.employeeId=employeeId;
		this.firstName=firstName;
		this.salary=salary;
	}
	public Employee() {
		System.out.println("Default constructor");
	}
	
	public int getEmployeeId() {
		return employeeId;
	}
	public void setEmployeeId(int employeeId) {
		this.employeeId=employeeId;
	}
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName=firstName;
	}
	public double getSalary() {
		return salary;
	}
	public void setSalary(double salary) {
		this.salary=salary;
	}

}