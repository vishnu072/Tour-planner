  package com.example.demo.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.reposi;
import com.example.demo.service;
import com.example.demo.todo;

@RestController
@CrossOrigin

public class controller {
	@Autowired
	reposi repo;
	
	@Autowired
	service ser;
	
	@GetMapping("/")
	public String hello()
	{
		return "Hello";
	}
	
	@GetMapping("/get")
	List<todo>getList()
	{
		return repo.findAll();
	}
	
	@PostMapping("/post")
	public todo create(@RequestBody todo a)
	{
		return repo.save(a);
	}
	@PutMapping("/put")
	public String update(@RequestBody  todo stu) {
		return ser.updateDetails(stu);
	}
	@DeleteMapping("/del")
	public String delete(@RequestParam int rating)
	
	{
		return ser.delStud(rating);
	}
	

}
