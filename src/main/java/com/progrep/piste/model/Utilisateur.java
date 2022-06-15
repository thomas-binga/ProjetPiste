package com.progrep.piste.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Getter
@Setter
@Entity
@Table(name = "utilisateur")
public class Utilisateur {



	@Id
	@Column(name = "numutil")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int NumUtil;
	
	@Column(name = "surname")
	private String surname;

	@Column(name = "forename")
	private String forename;
	
	@Column(name = "email")
	private String email;

	
	public Utilisateur(String surname, String forename, String email) {
		super();
		this.surname = surname;
		this.forename = forename;
		this.email = email;
	}

	public Utilisateur() {
		super();

	}

}
