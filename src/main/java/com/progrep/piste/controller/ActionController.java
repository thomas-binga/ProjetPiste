package com.progrep.piste.controller;

import com.progrep.piste.model.Action;
import com.progrep.piste.model.ActionWithUserScore;
import com.progrep.piste.model.Inscription;
import com.progrep.piste.model.InscriptionAction;
import com.progrep.piste.repository.ActionRepository;
import com.progrep.piste.repository.InscriptionActionRepository;
import com.progrep.piste.repository.InscriptionRepository;
import lombok.Getter;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.persistence.Entity;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/actions")
public class ActionController {

    @Autowired
    private ActionRepository ActionRepository;
    @Autowired
    private InscriptionRepository InscriptionRepository;
    @Autowired
    private InscriptionActionRepository InscriptionActionRepository;


    @GetMapping()
    public List<Action> getAllActions() {
        return ActionRepository.findAll();
    }

    @GetMapping("/byMissionId/{id}")
    public List<Action> getActionsByMissionId(@PathVariable Integer id) { //TODO : fix that
        return ActionRepository.findActionByMissionId(id);
    }

    @GetMapping("/byUserId/{id}")
    public List<ActionWithUserScore> getActionsByUserId(@PathVariable Integer id) {
        List<Action> actions = ActionRepository.findActionByUserId(id); //TODO return scores as well


        List<ActionWithUserScore> actionWithUserScores = new ArrayList<>();
        for (Action action: actions) {
            actionWithUserScores.add(new ActionWithUserScore(action, ActionRepository.findScoreByAction(action, id)));
        }
        return actionWithUserScores;
    }

    @PostMapping("/do/{userId}/{actionId}")
    public ActionStatus doAction(@PathVariable Integer userId, @PathVariable Integer actionId) {
        Action action = ActionRepository.findById(actionId).orElse(null);
        int score = (int) (Math.random() * 13) + 2;
        List<Inscription> inscriptions = InscriptionRepository.findAllByUtilisateur_NumUtil(userId);
        for (Inscription inscription : inscriptions) {
            if ((inscription.getFk_mission().getId() == 1 && actionId < 4) || (inscription.getFk_mission().getId() == 2 && actionId > 3) ) {
                InscriptionAction oldEntry = InscriptionActionRepository.findByActionAndInscription(action, inscription);
                return getActionResponse(action, userId, oldEntry, score);
            }
        }
        return null;

    }

    @Getter
    @Setter
    public class ActionStatus{
        private String Status;
        private Integer ActionPrecedente;

        public ActionStatus(String Status, int ActionPrecedente) {
            this.Status = Status;
            this.ActionPrecedente = ActionPrecedente;
        }
    }

    public ActionStatus getActionResponse(Action action, Integer userId, InscriptionAction oldEntry, int score) {
        if (oldEntry.getScore() != 0) {
            return new ActionStatus("FULL", 0);
        }
        if (action.getActionPrecedente() != null) {
            Action actionPrecedente = ActionRepository.findById(action.getActionPrecedente()).orElse(null);
            if (ActionRepository.findScoreByAction(actionPrecedente, userId) == 0) {
                return new ActionStatus("TODO", actionPrecedente.getId());
            }
        }
        oldEntry.setScore(score);
        InscriptionActionRepository.save(oldEntry);
        return new ActionStatus("GOOD", 0);
    }
}
