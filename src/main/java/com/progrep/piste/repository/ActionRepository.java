package com.progrep.piste.repository;

import com.progrep.piste.model.Action;
import com.progrep.piste.model.ActionWithUserScore;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ActionRepository extends JpaRepository<Action, Integer> {

    @Query(value = "SELECT a.* FROM action a JOIN action__mission am ON a.id = am.fk_action WHERE am.fk_mission = ?1",
            nativeQuery = true)
    List<Action> findActionByMissionId(int missionId);


    @Query(value = "SELECT a.* FROM action a " +
            "JOIN inscription__action ia ON a.id = ia.fk_action " +
            "JOIN inscription i on i.id = ia.fk_inscription" +
            " WHERE i.fk_utilisateur = ?1",
            nativeQuery = true)
    List<Action> findActionByUserId(int userId);

    @Query(value = """
SELECT new com.progrep.piste.model.ActionWithUserScore(a.id, a.description, a.actionPrecedente, a.scoreMinimum, ia.score) from Action a
JOIN InscriptionAction ia on ia.action = a
JOIN Inscription i on ia.inscription = i
WHERE i.utilisateur.NumUtil = ?1
""")
    List<ActionWithUserScore> findActionAndScoreByUserId(int userId);

    @Query(value = """
SELECT ia.score FROM inscription__action ia
            WHERE ia.fk_action in (?1) 
""", nativeQuery = true)
    List<Integer> findScoresByActionList(List<Action> actions);

}

