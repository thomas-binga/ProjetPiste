package com.progrep.piste.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Getter
@Setter
public class ActionWithUserScore {
    private int id;

    private String description;

    private Action actionPrecedente;

    private int scoreMinimum;

    private int userScore;

    public ActionWithUserScore(int id, String description, Action actionPrecedente, Integer scoreMinimum, Integer userScore) {
        this.id = id;
        this.description = description;
        this.actionPrecedente = actionPrecedente;
        this.scoreMinimum = scoreMinimum;
        if (userScore != null) {
            this.userScore = userScore;
        }else {
            this.userScore = 0;
        }
    }
}
