package com.progrep.piste.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
@Setter
@Getter
@Entity
@Table(name = "inscription__action")
public class InscriptionAction {
    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    private int id;

    @ManyToOne
    @JoinColumn(name = "fk_inscription")
    private Inscription inscription;

    @ManyToOne
    @JoinColumn(name = "fk_action")
    private Action action;


    @Column(name = "score")
    private int  score;


    public InscriptionAction(Inscription inscription, Action action, int score) {
        this.inscription = inscription;
        this.action = action;
        this.score = score;
    }

    public InscriptionAction() {

    }
}
