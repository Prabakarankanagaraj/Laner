package com.entrepreplancer.Entreportal;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ResourceInterface extends JpaRepository<Resource, Integer> {
		public Resource findByUsername(String user);
}
