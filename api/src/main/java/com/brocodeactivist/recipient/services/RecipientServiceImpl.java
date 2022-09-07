package com.brocodeactivist.recipient.services;

import com.brocodeactivist.recipient.entity.RecipientEntity;
import com.brocodeactivist.recipient.model.Recipient;
import com.brocodeactivist.recipient.repository.RecipientRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class RecipientServiceImpl implements RecipientService {

    private RecipientRepository recipientRepository;

    public RecipientServiceImpl(RecipientRepository recipientRepository) {
        this.recipientRepository = recipientRepository;
    }

    @Override
    public Recipient createRecipient(Recipient recipient) {
//        Optional<RecipientEntity> recipientByEmail = recipientRepository.findRecipientByEmail(recipient.getEmailId());
//        if (recipientByEmail.isPresent())
//            throw new IllegalStateException("User with this email already exists");
        RecipientEntity recipientEntity = new RecipientEntity();

        BeanUtils.copyProperties(recipient, recipientEntity);
        recipientRepository.save(recipientEntity);
        return recipient;
    }

    @Override
    public List<Recipient> getAllRecipients() {
        List<RecipientEntity> employeeEntities
                = recipientRepository.findAll();

        List<Recipient> recipients = employeeEntities
                .stream()
                .map(emp -> new Recipient(
                        emp.getId(),
                        emp.getFirstName(),
                        emp.getLastName(),
                        emp.getEmailId()))
                .collect(Collectors.toList());
        return recipients;
    }

    @Override
    public boolean deleteRecipient(Long id) {
        RecipientEntity employee = recipientRepository.findById(id).get();
        recipientRepository.delete(employee);
        return true;
    }

    @Override
    public Recipient getRecipientById(Long id) {
        RecipientEntity recipientEntity
                = recipientRepository.findById(id).get();
        Recipient recipient = new Recipient();
        BeanUtils.copyProperties(recipientEntity, recipient);
        return recipient;
    }

    @Override
    public Recipient updateRecipient(Long id, Recipient recipient) {
        RecipientEntity recipientEntity
                = recipientRepository.findById(id).get();
        recipientEntity.setEmailId(recipient.getEmailId());
        recipientEntity.setFirstName(recipient.getFirstName());
        recipientEntity.setLastName(recipient.getLastName());

        recipientRepository.save(recipientEntity);
        return recipient;
    }
}
