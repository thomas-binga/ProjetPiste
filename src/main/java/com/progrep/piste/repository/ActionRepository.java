package com.progrep.piste.repository;

import com.progrep.piste.model.Action;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ActionRepository extends JpaRepository<Action, Integer> {

    @Query(value = "SELECT a FROM action a JOIN action__mission am ON a.id = am.fk_action WHERE am.fk_mission = ?1",
            nativeQuery = true)
    List<Action> findActionByMissionId(int missionId);

}

