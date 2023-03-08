package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class service {
	@Autowired
	reposi repl;
	
	
	public String delStud(int rating)
	{
		repl.deleteById(rating);
		return "deleted";
	}
	public String updateDetails(todo ap) {
		repl.save(ap);
		return "updated";
	}

}

