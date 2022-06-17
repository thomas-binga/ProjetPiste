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

    @ManyToOne
    @JoinColumn(name = "fk_utilisateur")
    private Utilisateur utilisateur;

    @ManyToOne
    @JoinColumn(name = "fk_mission")
    private Mission fk_mission;

    public Inscription(Utilisateur utilisateur, Mission mission) {
        super();
        this.utilisateur = utilisateur;
        this.fk_mission = mission;
    }

    public Inscription() {
        super();
    }

}
