
package com.progrep.piste.controller;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.progrep.piste.model.Utilisateur;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.progrep.piste.exception.ResourceNotFoundException;
import com.progrep.piste.repository.UserRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class UserController {

	@Autowired
	private UserRepository UserRepository;
	
	// get all Users
	@GetMapping("/users")
	public List<Utilisateur> getAllUsers(){
		return UserRepository.findAll();
	}		
	
	// create User rest api
	@PostMapping("/users")
	public Utilisateur createUser(@RequestBody Utilisateur utilisateur) {
		return UserRepository.save(utilisateur);
	}
	
	// get User by id rest api
	@GetMapping("/users/{id}")
	public ResponseEntity<Utilisateur> getUserById(@PathVariable Long id) {
		Utilisateur utilisateur = UserRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("User not exist with id :" + id));
		return ResponseEntity.ok(utilisateur);
	}
	
	// update User rest api
	
	@PutMapping("/Users/{id}")
	public ResponseEntity<Utilisateur> updateUser(@PathVariable Long id, @RequestBody Utilisateur utilisateurDetails){
		Utilisateur utilisateur = UserRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("User not exist with id :" + id));
		
		utilisateur.setSurname(utilisateurDetails.getSurname());
		utilisateur.setForename(utilisateurDetails.getForename());
		utilisateur.setEmail(utilisateurDetails.getEmail());
		
		Utilisateur updatedUtilisateur = UserRepository.save(utilisateur);
		return ResponseEntity.ok(updatedUtilisateur);
	}
	
	// delete User rest api
	@DeleteMapping("/Users/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteUser(@PathVariable Long id){
		Utilisateur utilisateur = UserRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("User not exist with id :" + id));
		
		UserRepository.delete(utilisateur);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
	
	
}
