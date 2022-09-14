package com.entrepreplancer.Entreportal;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface LancerInterface extends JpaRepository<Lancer, Integer>{
     public List<Lancer> findAllByskills(String tech);
     public List<Lancer> findAllBycommercial(float salary);
     public List<Lancer> findAllByexperience(int month);
     
     @Query("from Lancer where skills=:tech and experience>=:exp")
     public List<Lancer> findAllBySkillsAndExperience(String tech,int exp);
     
     @Query("select userName from Lancer where skills=:skill")
     public List<String> findAllBySkill(String skill);
     
     @Transactional
     @Modifying
     @Query("update Lancer set commercial=commercial*0.10 where experience>=:exp")
     public void updateSalaryByExperience(int exp);
     
     @Transactional
     @Modifying
     @Query("delete from Lancer where skills like %:tech%")
     public void deleteAllByCustomize(String tech);
     
     @Query("select userName from Lancer where skills like %:tp%")
     public List<String> findAllByTypesLiks(String tp);
     
     
}
