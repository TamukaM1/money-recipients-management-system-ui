package com.brocodeactivist.recipient.entity;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
@Table(name = "recipients")
public class RecipientEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String firstName;
    private String lastName;
    @Column(name = "emailId", unique=true)
    private String emailId;
}
