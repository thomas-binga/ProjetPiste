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

//        @ManyToOne
//        @JoinColumn(name = "fk_action")
//        private Action actionPrecedente;
        @Column(name = "fk_action")
        private Integer actionPrecedente;

        @Column(name = "description")
        private String description;


        @Column(name = "score_minimum")
        private int scoreMinimum;

//        public Action(Action actionPrecedente, String description, int scoreMinimum) {
//            this.actionPrecedente = actionPrecedente;
//            this.description = description;
//            this.scoreMinimum = scoreMinimum;
//        }
//
//        public Action() {
//        }
}
