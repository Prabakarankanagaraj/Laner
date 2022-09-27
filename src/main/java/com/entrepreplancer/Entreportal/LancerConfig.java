package com.entrepreplancer.Entreportal;

import java.util.Collection;
import java.util.stream.Stream;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityCustomizer;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class LancerConfig {
 
	@Autowired
	ResourceService service;
	
	AuthenticationManager manager;
	
	@Bean
	public WebSecurityCustomizer share() {
		return (Web)->Web.ignoring().antMatchers("/api/signup");
	}
	
	@Bean
	public InMemoryUserDetailsManager user() {
		UserDetails myUser1=User.withDefaultPasswordEncoder().username("praba")
				.password("karan").roles("user").build();
		UserDetails myUser2=User.withDefaultPasswordEncoder().username("sil")
				.password("viya").roles("user").build();
		Collection<UserDetails> myUsers=Stream.of(myUser1,myUser2).toList();
		return new InMemoryUserDetailsManager(myUsers);
	}
	
	@Bean
	public PasswordEncoder encoder() {
		return new BCryptPasswordEncoder();
		
	}
	
	@Bean
	public SecurityFilterChain safety(HttpSecurity hp) throws Exception {
		//hp.authorizeRequests().anyRequest().authenticated();
		hp.authorizeRequests().antMatchers("/api/*").authenticated();
		hp.csrf().disable();
		hp.httpBasic();
		hp.formLogin();
		
		
		AuthenticationManagerBuilder builder=hp.getSharedObject(AuthenticationManagerBuilder.class);
		builder.userDetailsService(service).passwordEncoder(encoder());
		manager=builder.build();
		hp.authenticationManager(manager);
		return hp.build();
	}
	
}
