package com.jrishmani.Dashboardsend.mail.service;

//
//import com.jrishmani.Dashboardsend.mail.model.FormData;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.mail.SimpleMailMessage;
//import org.springframework.mail.javamail.JavaMailSender;
//import org.springframework.stereotype.Service;

//@Service
//public class EmailService {
//
//    @Autowired
//    private JavaMailSender javaMailSender;

//    public void sendEmail(String recipient, String formLink) {
//        SimpleMailMessage message = new SimpleMailMessage();
//        message.setTo(recipient);
//        message.setSubject("Please fill out the form");
//        message.setText("https://docs.google.com/forms/d/e/1FAIpQLSej8Pmh1het0iwiL-9V_KTAS4dD0ttgvcs4RCc9nPxzHzCbZA/viewform?usp=sf_link " + formLink);
//
//        try {
//            javaMailSender.send(message);
//            System.out.println("Email sent successfully to: " + recipient);
//        } catch (Exception e) {
//            System.err.println("Error sending email: " + e.getMessage());
//        }
//    }
//
//    public void saveFormResponse(FormData formData) {
//    }
//}
//


//recent working code

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailService {
    private final JavaMailSender javaMailSender;


    @Autowired
    public EmailService(JavaMailSender javaMailSender) {
        this.javaMailSender = javaMailSender;
    }

    public void sendEmail(SimpleMailMessage message) {
        try {
            javaMailSender.send(message);
            System.out.println("Email sent successfully to: " + message.getTo()[0]);
        } catch (Exception e) {
            System.err.println("Error sending email: " + e.getMessage());
        }
    }
}
