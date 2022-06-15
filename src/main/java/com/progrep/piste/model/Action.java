package com.progrep.piste.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@Entity
@Table(name = "action")
public class Action {

        @Id
        private int id;

        @Column(name = "wording")
        private String description;


        @ManyToOne
        @JoinColumn(name = "fk_action")
        private Action actionPrecedente;

        @Column(name = "score_minimum")
        private int scoreMinimum;
}
