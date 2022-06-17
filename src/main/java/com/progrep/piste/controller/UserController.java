package com.progrep.piste.controller;

import java.util.ArrayList;
import java.util.List;

import com.progrep.piste.model.*;
import com.progrep.piste.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/")
public class UserController {

	@Autowired
	private UserRepository userRepository;
	@Autowired
	private InscriptionRepository inscriptionRepository;
	@Autowired
	private MissionRepository missionRepository;
	@Autowired
	private InscriptionActionRepository inscriptionActionRepository;
	@Autowired
	private ActionRepository actionRepository;

	

	@GetMapping("/users")
	public List<Utilisateur> getAllUsers(){
		return userRepository.findAll();
	}		
	
	@PostMapping("/users")
	public Utilisateur createUser(@RequestBody UserWithMissionId userWithMissionId) {
		Utilisateur user = userRepository.save(userWithMissionId.getUtilisateur());
		List<Action> actions = new ArrayList<>();
		for (Integer missionId : userWithMissionId.getMissionIdList()) {
			Inscription inscription = new Inscription(user, missionRepository.getReferenceById(missionId));
			inscriptionRepository.save(inscription);
			actions = actionRepository.findActionByMissionId(missionId);
			for (Action action : actions) {
				InscriptionAction inscriptionAction = new InscriptionAction(inscription, action, 0);
				inscriptionActionRepository.save(inscriptionAction);
			}
			actions.clear();
			//TODO fill INSCRIPTION__ACTION as well
		}
		return user;
	}

//	@PutMapping("/Users/{id}")
//	public ResponseEntity<Utilisateur> updateUser(@PathVariable Integer id, @RequestBody Utilisateur utilisateurDetails){
//		Utilisateur utilisateur = UserRepository.findById(id)
//				.orElseThrow(() -> new ResourceNotFoundException("User not exist with id :" + id));
//		utilisateur.setSurname(utilisateurDetails.getSurname());
//		utilisateur.setForename(utilisateurDetails.getForename());
//		utilisateur.setEmail(utilisateurDetails.getEmail());
//		Utilisateur updatedUtilisateur = UserRepository.save(utilisateur);
//		return ResponseEntity.ok(updatedUtilisateur);
//	}

	@GetMapping("/users/{id}")
	public Utilisateur getUserById(@PathVariable Integer id){
		return userRepository.findById(id).orElse(null);
	}
	
	@Transactional
	@PostMapping("/users/delete/{numUtil}")
	public void deleteUser(@PathVariable Integer numUtil) {
		inscriptionActionRepository.deleteAllByUtilisateur_NumUtil(numUtil);
		inscriptionRepository.deleteAllByUtilisateur_NumUtil(numUtil);
		userRepository.deleteById(numUtil);
	}
	
}
