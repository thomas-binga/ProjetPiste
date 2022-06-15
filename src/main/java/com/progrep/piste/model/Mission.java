package com.progrep.piste.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Getter
@Setter
@Entity
@Table(name = "mission")
public class Mission {

    @Id
    private int id;

    @Column(name = "nom")
    private String nom;
}
