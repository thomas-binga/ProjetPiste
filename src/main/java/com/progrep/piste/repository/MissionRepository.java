package com.progrep.piste.repository;

import com.progrep.piste.model.Action;
import com.progrep.piste.model.Mission;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MissionRepository extends JpaRepository<Mission, Integer> {

//    @Query(value=
//            """
//            SELECT a.* from action__mission am join action a on a.id=am.fk_action where am.fk_mission = ?1
//            """, nativeQuery = true)
//    List<Action> findActionByMissionId(Integer id);

}

