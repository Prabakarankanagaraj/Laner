package com.entrepreplancer.Entreportal;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LancerController {
	
	@Autowired
	LancerService service;
	
	@Autowired
	ResourceService serv;
	
	@Autowired
	PasswordEncoder encoder;
	@PostMapping("/signup")
	public Resource signingUp(@RequestBody Resource res) {
		String newone=encoder.encode(res.getPassword());
		res.setPassword(newone);
		return serv.getDetails(res);
	}
	
	@DeleteMapping("/delAll/{tp}")
	public List<String> callDeleteAll(@PathVariable("tp")String tp){
		return service.makeDeleteCustom(tp);
		
	}
	
	
	@PutMapping("/ups/{exp}")
	public void callUpadteSalary(@PathVariable("exp") int exp) {
		service.makeUpdateSalary(exp);
	}
	
	@PutMapping("/up")
	public Lancer callUpdate(@RequestBody Lancer up) {
		return service.newOne(up);
		
	}
	
	@GetMapping("/bytech/{tech}")
	public List<String> callReadUser(@PathVariable("tech") String tech){
		return service.makeReadUser(tech);		
	}
	
	@DeleteMapping("/delid/{pos}")
	public String CallDeleteById(@PathVariable("pos")int pos) {
		return service.makeDeleteKey(pos);
	}
	@GetMapping("/bytwo/{one}/{two}")
	public List<Lancer> callReadTwo(@PathVariable("one")String one, @PathVariable("two")int two){
		return service.makeReadTwo(one, two);
	}
	
	@DeleteMapping("/del")
	public String callDelete(@RequestBody Lancer user) {
		return service.makeDelete(user);
			
	}
	
	@GetMapping("/byexperience/{month}")
	public List<Lancer> callReadExperience(@PathVariable("month") int month){
	   return service.makereadExperience(month);
	}
	
	@GetMapping("/bysalary/{price}")
	public List<Lancer> callReadSalary(@PathVariable("price") float price){
		return service.makeReadSalary(price);
	}
	
	@GetMapping("/byskills/{techie}")
	public List<Lancer> callReadSkills(@PathVariable("techie") String techie){
		return service.makeReadSkills(techie);
	}
	
	@GetMapping("/{key}")
	public Optional<Lancer> callRead(@PathVariable("key") int key){
		return service.makeRead(key);
	}
	
	@GetMapping("/")
	public List<Lancer> callList(){
		return service.showAll();
	
	}
	
	@PostMapping("/new")
	public Lancer callCreate(@RequestBody Lancer obj) {
		return service.newOne(obj);
	}
	

}
