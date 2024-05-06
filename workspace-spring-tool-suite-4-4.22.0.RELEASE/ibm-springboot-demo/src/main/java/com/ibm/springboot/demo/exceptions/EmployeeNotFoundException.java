package com.ibm.springboot.demo.exceptions;

public class EmployeeNotFoundException extends RuntimeException {
    
    /**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public EmployeeNotFoundException() {
        super("Employee not found"); // Default error message
    }

    public EmployeeNotFoundException(String message) {
        super(message); // Custom error message
    }
}
