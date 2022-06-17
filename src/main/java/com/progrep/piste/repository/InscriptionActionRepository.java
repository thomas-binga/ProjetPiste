package com.progrep.piste.repository;

import com.progrep.piste.model.InscriptionAction;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface InscriptionActionRepository extends JpaRepository<InscriptionAction, Integer> {

    @Modifying
    @Query(
            value = """
                DELETE ia FROM inscription__action ia
                LEFT JOIN inscription i ON ia.fk_inscription = i.id
                WHERE i.fk_utilisateur = ?1""",
            nativeQuery = true
    )
    void deleteAllByUtilisateur_NumUtil(int numUtil);

}

