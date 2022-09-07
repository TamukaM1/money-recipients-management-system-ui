package com.brocodeactivist.recipient.repository;

import com.brocodeactivist.recipient.entity.RecipientEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RecipientRepository extends JpaRepository<RecipientEntity, Long> {

//    @Query("SELECT r FROM Recipient r WHERE r.email =?1")
//    Optional<RecipientEntity> findRecipientByEmail(String emailId);
}
