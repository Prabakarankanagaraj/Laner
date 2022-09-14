package com.entrepreplancer.Entreportal;

import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertNotSame;
import static org.junit.Assert.assertNull;
import static org.junit.Assert.assertSame;
import static org.junit.Assert.assertTrue;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;

@SpringBootTest
@RunWith(SpringRunner.class)
class EntreportalApplicationTests {
	@MockBean
	LancerInterface repo;
	
	
	@Autowired
	LancerService service;

    @Test
    public void testingSkillAndExperience() {
    	Lancer l1=new Lancer(75,"praba","Java","mumbai",20,100,3);
		Lancer l2=new Lancer(55,"sil","Java","chennai",20,100,3);
		Lancer l3=new Lancer(65,"saran","javascript","Chennai",20,100,3);
		when(repo.findAllBySkillsAndExperience("Java", 20)).thenReturn(Stream.of(l1,l2).collect(Collectors.toList()));
		
		assertNotSame(l3, service.makeReadTwo("Java", 20).get(0));
    }
	
	@Test
	public void testinAllByExperience() {
		Lancer l1=new Lancer(75,"praba","Java","mumbai",20,100,3);
		Lancer l2=new Lancer(55,"sil","Java","chennai",20,100,3);
		Lancer l3=new Lancer(65,"saran","javascript","Chennai",20,100,3);
		when(repo.findAllByexperience(20)).thenReturn(Stream.of(l1,l2,l3).collect(Collectors.toList()));
		assertEquals(l2, service.makereadExperience(20).get(1));
	}
	
	@Test
	public void testingAllBySalary() {
		Lancer l1=new Lancer(75,"praba","Java","mumbai",20,100,3);
		Lancer l2=new Lancer(55,"sil","Java","chennai",20,100,3);
		Lancer l3=new Lancer(65,"saran","javascript","Chennai",20,100,3);
		when(repo.findAllBycommercial(100)).thenReturn(Stream.of(l1,l2,l3).collect(Collectors.toList()));
		assertEquals(l2, service.makeReadSalary(100).get(1));
	}
	
	@Test
	public void testingAllBySkills() {
		Lancer l1=new Lancer(75,"praba","Java","mumbai",20,100,3);
		Lancer l2=new Lancer(55,"sil","Java","chennai",20,100,3);
		Lancer l3=new Lancer(65,"saran","javascript","Chennai",20,100,3);
		when(repo.findAllByskills("Java")).thenReturn(Stream.of(l1,l2).collect(Collectors.toList()));
		
		assertEquals(l2, service.makeReadSkills("Java").get(1) );
	}
	
	@Test
	public void testingDelete() {
		Lancer l1=new Lancer(75,"praba","ruby","mumbai",20,100,3);
		repo.delete(l1);
		verify(repo, times(1)).delete(l1);

	}
	
	@Test
	public void testingRead() {
		Optional<Lancer> l1=Optional.of(new Lancer(75,"praba","ruby","chennai",20,100,3));
		Optional<Lancer> l2=Optional.of(new Lancer(55,"sil","php","chennai",20,100,3));
		
		when(repo.findById(75)).thenReturn(l1);
		when(repo.findById(55)).thenReturn(l2);
		assertEquals(l2, service.makeRead(55));
		assertTrue(service.makeRead(75).get().getLocation().equals(l2.get().getLocation()));

	}
	
	@Test
	public void testingCreate() {
		Lancer l1=new Lancer(75,"praba","ruby","mumbai",20,100,3);
		Lancer l2=new Lancer(55,"sil","php","chennai",20,100,3);
		
		when(repo.save(l1)).thenReturn(l1);
		when(repo.save(l2)).thenReturn(l2);
		assertTrue(service.newOne(l1).getSkills().equals("ruby"));
		assertNotNull(service.newOne(l2).getLocation());
		
		
	}
	
	@Test
	public void testingAll() {
		Lancer l1=new Lancer(75,"praba","ruby","mumbai",20,100,3);
		Lancer l2=new Lancer(55,"sil","php","chennai",20,100,3);
		Lancer l3=new Lancer(65,"saran","javascript","Chennai",20,100,3);
		Lancer l4=new Lancer(75,"praba","ruby","mumbai",20,100,3);
		Lancer l5=null;
		
		when(repo.findAll()).thenReturn(Stream.of(l1,l2,l3,l4,l5).collect(Collectors.toList()));
		assertSame(5, service.showAll().size());
		
	}

	@Test
	void contextLoads() {
	}

}
