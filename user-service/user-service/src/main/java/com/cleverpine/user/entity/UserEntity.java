package com.cleverpine.user.entity;

import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "users",
        uniqueConstraints = {@UniqueConstraint(columnNames = {"username"})})
public class UserEntity {

    @Id
    @Column(name = "id")
    private Long id;

    @Column(name = "username", unique = true, nullable = false, length = 50)
    private String username;

    @Column(name = "firstname", nullable = false, length = 50)
    private String firstName;

    @Column(name = "lastname", nullable = false, length = 50)
    private String lastName;

    @Column(name = "address1", nullable = false, length = 50)
    private String address1;

    @Column(name = "address2", length = 50)
    private String address2;

    @Column(name = "postcode", nullable = false, length = 10)
    private String postcode;

    @Column(name = "country", nullable = false, length = 30)
    private String country;

    @Column(name = "avatar", nullable = false, length = 255)
    private String avatar;

    @Column(name = "pid", nullable = false, length = 255)
    private String pid;
}