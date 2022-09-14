package com.entrepreplancer.Entreportal;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LancerService {
	@Autowired
	LancerInterface repo;
	
	public List<String> makeDeleteCustom(String ch){
		List<String> tmp=repo.findAllByTypesLiks(ch);
		repo.deleteAllByCustomize(ch);
		return tmp;		
	}
	
	public String makeDeleteKey(int key) {
		Lancer t=repo.findById(key).orElse(null);	
		String msg=t.getUserName()+"has deleted";
	    repo.deleteById(key);
		return msg;
		
	}
	
	public void makeUpdateSalary(int exp) {
		repo.updateSalaryByExperience(exp);
	}
	
	public List<String> makeReadUser(String skill){
		return repo.findAllBySkill(skill);
	}
	
	public List<Lancer> makeReadTwo(String tech,int exp){
		return repo.findAllBySkillsAndExperience(tech, exp);
	}
	
	public String makeDelete(Lancer del) {
		String msg=del.getUserName()+" has deleted";
		repo.delete(del);
		return msg;
	}
	
	public List<Lancer> makereadExperience(int month){
		return repo.findAllByexperience(month);
	}
	
	public List<Lancer> makeReadSalary(float pkg){
		return repo.findAllBycommercial(pkg);
	}
	
	public List<Lancer> makeReadSkills(String tech){
		return repo.findAllByskills(tech);
	}
	
	public Optional<Lancer> makeRead(int id){
		return repo.findById(id);
	}
	
	public List<Lancer> showAll(){
		return repo.findAll();
	}
	
	public Lancer newOne(Lancer one) {
		return repo.save(one);
	}

}
