package com.ibm.springboot.demo;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.Timeout;
import org.junit.jupiter.api.extension.ExtendWith;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.ValueSource;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import com.ibm.springboot.demo.model.Employee;
import com.ibm.springboot.demo.repository.EmployeeRepository;
import com.ibm.springboot.demo.service.EmployeeService;
import com.ibm.springboot.demo.service.EmployeeServiceImpl;

import java.time.Duration;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.TimeUnit;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotEquals;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;
import static org.junit.jupiter.api.Assertions.assertTimeout;
//for every business method- write atleast two test cases

@SpringBootTest
@ExtendWith(MockitoExtension.class)
class IbmSpringbootDemoApplicationTests {

	@MockBean
	private EmployeeRepository employeeRepository;

	@InjectMocks
	private EmployeeServiceImpl employeeService;

	private static final Logger LOG = LoggerFactory.getLogger(IbmSpringbootDemoApplicationTests.class);

	@BeforeAll
	public static void setup() {

		LOG.info("before all ");

	}

	@AfterAll
	public static void setup2() {

		LOG.info("after all ");

	}

	@AfterEach
	public void setup3() {

		LOG.info("after each ");

	}

	@BeforeEach
	public void setup4() {
		java.util.List<Employee> empList = new ArrayList<>();
		empList.add(new Employee());
		empList.add(new Employee());
		empList.add(new Employee());

		when(employeeRepository.findAll()).thenReturn(empList);
		LOG.info("before each ");

	}

	@Test
	public void testAllEmps() {
		assertEquals(employeeService.getAllEmployees().size(), 15);
	}

	@Test
	public void testAllEmps2() {
		assertNotEquals(employeeService.getAllEmployees().size(), 14);
	}

	@Test
	public void testAddEmployee() {
		Employee emp = new Employee(null, "diya", 10.5, "diyatakkar24@gmail.com");
		assertEquals(employeeService.addEmployee(emp), emp);
	}

	@Test
	public void testAllEmpsTimes() {
		employeeRepository.findAll();
		employeeRepository.findAll();
		employeeRepository.findAll();
		;
		employeeRepository.findAll();
		verify(employeeRepository, times(2)).findAll();

	}

	@Disabled
	@Test
	public void testAllEmpsNegative() {
		assertNotEquals(employeeService.getAllEmployees().size(), 4);
	}

	@Disabled
	@ParameterizedTest
	@ValueSource(strings = { "Siddharth", "Yuvraj" })
	void testGetEmpsById(String employeeId) {
		assertEquals(employeeId, employeeService.getEmployeeByFirstName(employeeId).get(0).getFirstName());
	}

	@Timeout(value = 10, unit = TimeUnit.MILLISECONDS)
	@Test
	public void testAllEmpsTimeout() {
		assertTimeout(Duration.ofMillis(10), () -> {
			employeeService.getAllEmployees();
		});

	}

//
//  //positive test case
//	@Test
//	public void testTest() {
//		Integer expected=10;
//		Integer actual=5+5;
//		
//		//for comparing- assertEquals(expected,actual)
//		
//		assertEquals(expected,actual);
//	}
//	
//	//negative test case
//	@Test
//	public void testTest2() {
//		Integer unexpected=10;
//		Integer actual=5+6;
//		assertNotEquals(unexpected,actual);
//	}
//	
//	

}