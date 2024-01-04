package com.jrishmani.Dashboardsend.mail.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "form-email")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class FormData {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String email;


}
