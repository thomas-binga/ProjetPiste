package com.progrep.piste.repository;

import com.progrep.piste.model.InscriptionAction;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface InscriptionActionRepository extends JpaRepository<InscriptionAction, Integer> {

}

