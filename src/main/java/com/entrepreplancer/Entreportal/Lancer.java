package com.entrepreplancer.Entreportal;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Lancer {
	@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="RegId")
	private int lancerId;
	@Column(name="RegName")
	private String userName;
	@Column(name="Tech")
	private String skills;
	@Column(name="Address")
	private String location;
	@Column(name="Experience")
	private int experience;
	@Column(name="Salary")
	private float commercial;
	@Column(name="Record")
	private int previousProject;
	
	
	}
