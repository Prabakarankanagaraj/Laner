package com.entrepreplancer.Entreportal;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class ResourceService implements UserDetailsService {
	
	@Autowired
	ResourceInterface repo;
	
	public Resource getDetails(Resource res) {
		return repo.save(res);
	}
	

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		// TODO Auto-generated method stub
		Resource t= repo.findByUsername(username); 
		if(t==null) {
			throw new UsernameNotFoundException("username invalid");
		}
		return t;
	}

}
