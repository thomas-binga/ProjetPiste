package com.progrep.piste.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.progrep.piste.model.Utilisateur;

@Repository
public interface UserRepository extends JpaRepository<Utilisateur, Long>{

}
