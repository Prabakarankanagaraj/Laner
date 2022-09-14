package com.entrepreplancer.Entreportal;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.password.PasswordEncoder;

@SpringBootApplication
public class EntreportalApplication {
	
//	@Autowired
//	PasswordEncoder encoder;
//	
//	@Autowired
//	ResourceService service;

	public static void main(String[] args) {
		SpringApplication.run(EntreportalApplication.class, args);
	}
	
//	@PostConstruct
//	public void tmp() {
//		Resource res=new Resource();
//		
//	res.setEmail("praba@gmail.com");res.setEmpName("prabakaran");res.setMobile(7896541230l);
//	res.setPassword(encoder.encode("karan"));res.setUsername("praba");
//	
//	service.getDetails(res);
//	}

}
