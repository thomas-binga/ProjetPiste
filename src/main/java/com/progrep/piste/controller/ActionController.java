package com.progrep.piste.controller;

import com.progrep.piste.model.Action;
import com.progrep.piste.model.ActionWithUserScore;
import com.progrep.piste.repository.ActionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/")
public class ActionController {

    @Autowired
    private ActionRepository ActionRepository;


    @GetMapping("/actions")
    public List<Action> getAllActions() {
        return ActionRepository.findAll();
    }

    @GetMapping("/actions/byMissionId/{id}")
    public List<Action> getActionsByMissionId(@PathVariable Integer id) { //TODO : fix that
        return ActionRepository.findActionByMissionId(id);
    }

    @GetMapping("/actions/byUserId/{id}")
    public List<ActionWithUserScore> getActionsByUserId(@PathVariable Integer id) {
        List<Action> actions = ActionRepository.findActionByUserId(id); //TODO return scores as well


        List<ActionWithUserScore> actionWithUserScores = new ArrayList<>();
        for (Action action: actions) {
            ActionRepository.findScoreByAction(action, id).forEach(score -> {
                actionWithUserScores.add(new ActionWithUserScore(action, score));
            });
        }
        return actionWithUserScores;
    }


}
