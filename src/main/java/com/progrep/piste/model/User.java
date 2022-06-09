package com.progrep.piste.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "utilisateur")
public class User {


	@Column(name = "NumUtil")
	@Id
//	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name = "surname")
	private String surname;

	@Column(name = "forename")
	private String forename;
	
	@Column(name = "email")
	private String email;
	
	public User() {
		
	}
	
	public User(String surname, String forename, String email) {
		super();
		this.surname = surname;
		this.forename = forename;
		this.email = email;
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getSurname() {
		return surname;
	}
	public void setSurname(String surname) {
		this.surname = surname;
	}
	public String getForename() {
		return forename;
	}
	public void setForename(String forename) {
		this.forename = forename;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
}
