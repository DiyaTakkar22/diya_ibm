//package com.ibm.springboot.demo.controller;
//
//
//import java.util.List;
//
//import org.bson.types.ObjectId;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpHeaders;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
//
//import com.ibm.springboot.demo.model.Department;
//import com.ibm.springboot.demo.service.DepartmentService;
//
//@RestController
//@RequestMapping("dept")
//public class DepartmentController {
//   
//	@Autowired
//	DepartmentService departmentService;
//	
//	@GetMapping("get-all-depts")
//	public ResponseEntity<List<Department>> getAllDepts(){
//		List<Department> dept=departmentService.getAllDepartments();
//		dept.forEach(System.out::println);
//		HttpHeaders headers = new HttpHeaders();
//		headers.add("message","all departments successfully loaded!");
//		HttpStatus status=HttpStatus.OK;
//		ResponseEntity<List<Department>> response=new ResponseEntity<List<Department>>(dept,headers,status);
//		return response;
//	}
//	
//	@GetMapping("get-all-dept-by-id/{id}")
//	public ResponseEntity<Department> getDeptById(@PathVariable(name="id") ObjectId departmentId){
//		Department deptList=departmentService.getDepartmentById(departmentId);
//		HttpHeaders headers = new HttpHeaders();
//		headers.add("message","got the department by id");
//		HttpStatus status=HttpStatus.OK;
//		ResponseEntity<Department> response=new ResponseEntity<Department>(deptList,headers,status);
//		return response;
//	}
//	
//	
//	@PostMapping("add-dept")
//	public ResponseEntity<Department> addDept(@RequestBody Department department){
//		  Department dept=departmentService.addDepartment(department);
//		  HttpStatus status = HttpStatus.OK;
//		  HttpHeaders headers = new HttpHeaders();
//		  headers.add("message","departments successfull loaded");
//		  ResponseEntity<Department> response=new ResponseEntity<Department>(dept,headers,status);
//		  return response;
//	}
//	
//	@PostMapping("update-dept/{departmentName}")
//	public ResponseEntity<Department> updateDept(@PathVariable(name="departmentName") @RequestBody String departmentName){
//		  Department dept=departmentService.updateDepartment(departmentName);
//		  HttpStatus status = HttpStatus.OK;
//		  HttpHeaders headers = new HttpHeaders();
//		  headers.add("message","departments successfull loaded");
//		  ResponseEntity<Department> response=new ResponseEntity<Department>(dept,headers,status);
//		  return response;
//	}
//	
//	
//}
