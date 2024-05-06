package com.ibm.day3.obj;

public class Employee {
     private int EmpId;
     private String name;
     private double salary;
     
     public Employee(int EmpId, String name, double salary) {
    	 this.EmpId=EmpId;
    	 this.name=name;
    	 this.salary=salary;
     }

	public int getEmpId() {
		return EmpId;
	}

	public void setEmpId(int empId) {
		EmpId = empId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public double getSalary() {
		return salary;
	}

	public void setSalary(double salary) {
		this.salary = salary;
	}
	 @Override
	    public String toString() {
	        return "Employee [id=" + EmpId + ", name=" + name + ", salary=" + salary + "]";
	    }
    
}
