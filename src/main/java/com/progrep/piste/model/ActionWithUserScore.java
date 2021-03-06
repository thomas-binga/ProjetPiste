package com.progrep.piste.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import java.util.Objects;

@Getter
@Setter
public class ActionWithUserScore {
    private int id;

    private String description;

    private Integer actionPrecedente;

    private int scoreMinimum;

    private Integer userScore;

    public ActionWithUserScore(int id, String description, Integer actionPrecedente, Integer scoreMinimum, Integer userScore) {
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

    public ActionWithUserScore(Action action, Integer userScore) {
        this.id = action.getId();
        this.description = action.getDescription();
        this.actionPrecedente = action.getActionPrecedente();
        this.scoreMinimum = action.getScoreMinimum();
        this.userScore = Objects.requireNonNullElse(userScore, 0);
    }
}
