package com.progrep.piste.controller;

import com.progrep.piste.exception.ResourceNotFoundException;
import com.progrep.piste.model.Action;
import com.progrep.piste.model.Mission;
import com.progrep.piste.model.Utilisateur;
import com.progrep.piste.repository.ActionRepository;
import com.progrep.piste.repository.MissionRepository;
import com.progrep.piste.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/")
public class MissionController {

    @Autowired
    private MissionRepository missionRepository;
    private ActionRepository actionRepository;

    // get all ListMissionsComponent
    @GetMapping("/missions")
    public List<Mission> getAllMissions(){
        return missionRepository.findAll();
    }

    // get Mission by id rest api
    @GetMapping("/missions/{id}")
    public List<Action> getActionsByMissionId(@PathVariable Integer id) {
        return actionRepository.findActionByMissionId(id);
    }


}
