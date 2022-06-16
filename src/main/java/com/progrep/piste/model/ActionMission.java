package com.progrep.piste.model;

import javax.persistence.*;

@Entity
@Table(name = "action__mission")
public class ActionMission {
    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    private int id;

    @ManyToOne
    @JoinColumn(name = "fk_action")
    private Action action;

    @ManyToOne
    @JoinColumn(name = "fk_mission")
    private Mission mission;
}
