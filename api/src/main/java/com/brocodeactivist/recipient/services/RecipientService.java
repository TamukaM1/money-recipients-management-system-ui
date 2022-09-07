package com.brocodeactivist.recipient.services;

import com.brocodeactivist.recipient.model.Recipient;

import java.util.List;

public interface RecipientService {
    Recipient createRecipient(Recipient recipient);

    List<Recipient> getAllRecipients();

    boolean deleteRecipient(Long id);

    Recipient getRecipientById(Long id);

    Recipient updateRecipient(Long id, Recipient recipient);
}
