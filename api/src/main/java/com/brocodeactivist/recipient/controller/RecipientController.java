package com.brocodeactivist.recipient.controller;

import com.brocodeactivist.recipient.model.Recipient;
import com.brocodeactivist.recipient.services.RecipientService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class RecipientController {

    private final RecipientService recipientService;

    public RecipientController(RecipientService recipientService) {
        this.recipientService = recipientService;
    }

    @PostMapping("/recipients")
    public Recipient createRecipient(@RequestBody Recipient recipient) {
        return recipientService.createRecipient(recipient);
    }

    @GetMapping("/recipients")
    public List<Recipient> getAllRecipients() {
        return  recipientService.getAllRecipients();
    }

    @DeleteMapping("/recipients/{id}")
    public ResponseEntity<Map<String,Boolean>> deleteRecipients(@PathVariable Long id) {
        boolean deleted = false;
        deleted = recipientService.deleteRecipient(id);
        Map<String,Boolean> response = new HashMap<>();
        response.put("deleted", deleted);
        return ResponseEntity.ok(response);
    }

    @GetMapping("/recipients/{id}")
    public ResponseEntity<Recipient> getRecipientById(@PathVariable Long id) {
        Recipient recipient = null;
        recipient = recipientService.getRecipientById(id);
        return ResponseEntity.ok(recipient);
    }

    @PutMapping("/recipients/{id}")
    public ResponseEntity<Recipient> updateRecipient(@PathVariable Long id,
                                                     @RequestBody Recipient recipient) {
        recipient = recipientService.updateRecipient(id, recipient);
        return ResponseEntity.ok(recipient);
    }

}
