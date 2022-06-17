package com.progrep.piste.repository;

import com.progrep.piste.model.Inscription;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface InscriptionRepository extends JpaRepository<Inscription, Integer> {

    @Modifying
    @Query(
            value = "DELETE FROM inscription WHERE fk_utilisateur = ?1",
            nativeQuery = true
    )
    void deleteAllByUtilisateur_NumUtil(int numUtil);

}
