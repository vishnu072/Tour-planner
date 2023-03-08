package com.example.demo;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class todo {
	private String cityname;
	private String visitingPlace;
	private int time;
	@Id
	private int rating;
	public todo() {
		super();
		// TODO Auto-generated constructor stub
	}
	public todo(String cityname, String visitingPlace, int time, int rating) {
		super();
		this.cityname = cityname;
		this.visitingPlace = visitingPlace;
		this.time = time;
		this.rating = rating;
	}
	public String getCityname() {
		return cityname;
	}
	public void setCityname(String cityname) {
		this.cityname = cityname;
	}
	public String getVisitingPlace() {
		return visitingPlace;
	}
	public void setVisitingPlace(String visitingPlace) {
		this.visitingPlace = visitingPlace;
	}
	public int getTime() {
		return time;
	}
	public void setTime(int time) {
		this.time = time;
	}
	public int getRating() {
		return rating;
	}
	public void setRating(int rating) {
		this.rating = rating;
	}
	
	
	
	
}