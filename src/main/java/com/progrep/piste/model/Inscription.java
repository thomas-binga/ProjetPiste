package com.progrep.piste.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@Entity
@Table(name = "inscription")
public class Inscription {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "fk_utilisateur")
    private int fk_utilisateur;

    @Column(name = "fk_mission")
    private int fk_mission;

    public Inscription(int fk_utilisateur, int fk_mission) {
        super();
        this.fk_utilisateur = fk_utilisateur;
        this.fk_mission = fk_mission;
    }


    public Inscription() {
        super();
    }
}
