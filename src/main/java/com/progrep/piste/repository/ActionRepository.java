package com.progrep.piste.repository;

import com.progrep.piste.model.Action;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ActionRepository extends JpaRepository<Action, Integer> {

    @Query(value = "SELECT a FROM action a JOIN action__mission am ON a.id = am.fk_action WHERE am.fk_mission = ?1",
            nativeQuery = true)
    List<Action> findActionByMissionId(int missionId);

    @Query(value = "SELECT a FROM action a " +
            "JOIN inscription__action ia ON a.id = ia.fk_action " +
            "JOIN inscription i on i.id = ia.fk_inscription" +
            " WHERE i.fk_utilisateur = ?1",
            nativeQuery = true)
    List<Action> findActionByUserId(int userId);

}

