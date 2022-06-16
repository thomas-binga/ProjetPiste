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
    public List<Action> getActionsByMissionId(@PathVariable Integer id) {
        return ActionRepository.findActionByMissionId(id);
    }

    @GetMapping("/actions/byUserId/{id}")
    public List<ActionWithUserScore> getActionsByUserId(@PathVariable Integer id) {
        List<Action> actions = ActionRepository.findActionByUserId(id); //TODO return scores as well
        List<Integer> scores = ActionRepository.findScoresByActionList(actions);
        List<ActionWithUserScore> actionWithUserScores = new ArrayList<>();
        for (int i = 0; i < actions.size(); i++) {
            actionWithUserScores.add(new ActionWithUserScore(actions.get(i).getId(), actions.get(i).getDescription(), actions.get(i).getActionPrecedente(), actions.get(i).getScoreMinimum(), scores.get(i)));
        }
        return actionWithUserScores;
    }


}
