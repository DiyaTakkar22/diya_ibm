package com.ibm.springboot.demo.controller;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.ArrayList;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import com.ibm.springboot.demo.model.Employee;
import com.ibm.springboot.demo.service.EmployeeService;

@WebMvcTest(EmployeeController.class)
public class EmployeeControllerTests {
  
	@Autowired
	private MockMvc mockMvc;
	
	@MockBean
	private EmployeeService employeeService;
	
	@BeforeEach
	public void setup4() {
		java.util.List<Employee> empList=new ArrayList<>();
		empList.add(new Employee("102","Sonu",10.5,"xyz@yahoo.com"));
		empList.add(new Employee("103","Tonu",11.5,"abc@yahoo.com"));
		empList.add(new Employee("104","Monu",13.5,"pqr@gmail.com"));
		
		when(employeeService.getAllEmployees()).thenReturn(empList);
	
		
	}
	
	@Test
	public void testEmployeeControllerStatus() throws Exception {
		mockMvc.perform(get("/emp/get-all-emps")).andExpect(status().isOk());
	}
	
   public void testEmployeeControllerMediaPrint() throws Exception{
		
		mockMvc.perform(get("/Class2/all-emp")).andExpect(content().contentType(MediaType.APPLICATION_JSON));
		
	}
	@Test
	public void testEmployeeControllerPrint() throws Exception {
		mockMvc.perform(get("/emp/get-all-emps")).andDo(print());
	}
	
	
}
