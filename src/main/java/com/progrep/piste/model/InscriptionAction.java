package com.progrep.piste.model;

import javax.persistence.*;

@Entity
@Table(name = "inscription__action")
public class InscriptionAction {
    @Id
    private int id;

    @ManyToOne
    @JoinColumn(name = "fk_inscription")
    private Inscription inscription;

    @ManyToOne
    @JoinColumn(name = "fk_action")
    private Action action;

    @Column(name = "sort")
    private int sort;

    @Column(name = "score")
    private int score;


}
