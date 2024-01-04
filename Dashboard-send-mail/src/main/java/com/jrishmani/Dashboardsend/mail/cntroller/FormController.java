package com.jrishmani.Dashboardsend.mail.cntroller;
//
//import com.jrishmani.Dashboardsend.mail.model.FormData;
//import com.jrishmani.Dashboardsend.mail.repo.FormRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.beans.factory.annotation.Value;
//import org.springframework.http.ResponseEntity;
//import org.springframework.mail.SimpleMailMessage;
//import org.springframework.mail.javamail.JavaMailSender;
//import org.springframework.web.bind.annotation.*;
//
//import java.util.Optional;
//
//@RestController
//@RequestMapping("/form")
//public class FormController {
//
//    @Autowired
//    private FormRepository formDataRepository;
//
//    @Autowired
//    private JavaMailSender javaMailSender;
//
//    @Value("${default.receiver.email}") // Inject the default receiver email from application.properties
//    private String defaultReceiverEmail;
//
//    @PostMapping("/submit")
//    public ResponseEntity<String> submitForm(@RequestBody FormData formData) {
//        try {
//            // Save the form data to the database
//            formDataRepository.save(formData);
//
//            // Send an email
//            sendEmail(formData.getEmail(), "https://docs.google.com/forms/d/e/1FAIpQLSej8Pmh1het0iwiL-9V_KTAS4dD0ttgvcs4RCc9nPxzHzCbZA/viewform?usp=sf_link");
//
//            return ResponseEntity.ok("Form submitted successfully.");
//        } catch (Exception e) {
//            return ResponseEntity.status(500).body("Error submitting the form.");
//        }
//    }
//
//    @PutMapping("/update/{id}")
//    public ResponseEntity<String> updateForm(@PathVariable Long id, @RequestBody FormData updatedData) {
//        try {
//            // Find the existing form data in the database
//            Optional<FormData> existingData = formDataRepository.findById(id);
//            if (existingData.isPresent()) {
//                FormData dataToUpdate = existingData.get();
//                dataToUpdate.setName(updatedData.getName());
//                dataToUpdate.setEmail(updatedData.getEmail());
////                dataToUpdate.setDomain(updatedData.getDomain());
////                dataToUpdate.setExperience(updatedData.getExperience());
////                dataToUpdate.setPhoneNumber(updatedData.getPhoneNumber());
//
//                // Save the updated data to the database
//                formDataRepository.save(dataToUpdate);
//
//                return ResponseEntity.ok("Form data updated successfully.");
//            } else {
//                return ResponseEntity.notFound().build();
//            }
//        } catch (Exception e) {
//            return ResponseEntity.status(500).body("Error updating the form data.");
//        }
//    }
//
//    private void sendEmail(String email, String url) {
//        // Set the receiver's email address as the default value
//        String receiverEmail = defaultReceiverEmail; // Use the injected default email address
//
//        SimpleMailMessage mail = new SimpleMailMessage();
//        mail.setTo(receiverEmail);
//        mail.setSubject("Form Submission Confirmation");
//        mail.setText("Thank you for submitting the form. Details have been saved." + url);
//
//        javaMailSender.send(mail);
//    }
//}
//
////    private void sendEmail(FormData formData) {
////        // Set the receiver's email address as the default value
////        String receiverEmail = "prmani52@gmail.com"; // Change this to your desired email address
////
////        SimpleMailMessage mail = new SimpleMailMessage();
////        mail.setTo(receiverEmail);
////        mail.setSubject("Form Submission Confirmation");
////        mail.setText("Thank you for submitting the form. Details have been saved.");
////
////        javaMailSender.send(mail) ;
////    }
////}
//
//
//
////    @PostMapping("/submit")
////    public ResponseEntity<String> submitForm(@RequestBody FormData formData) {
////        // Save the form data to the database
////        formRepository.save(formData);
////        // Send an email with the Google Form link
////        sendEmail(formData.getEmail(), "https://docs.google.com/forms/d/e/1FAIpQLSej8Pmh1het0iwiL-9V_KTAS4dD0ttgvcs4RCc9nPxzHzCbZA/viewform?usp=sf_link");
////
////        return ResponseEntity.ok("Form response saved successfully.");
////    }
////
////    private void sendEmail(String recipient, String formLink) {
////        SimpleMailMessage message = new SimpleMailMessage();
////        message.setTo(recipient);
////        message.setSubject("Please fill out the form");
////        message.setText("Here is the link to the form: " + formLink);
////
////        try {
////            emailServices.sendEmail(message);
////            System.out.println("Email sent successfully to: " + recipient);
////        } catch (Exception e) {
////            System.err.println("Error sending email: " + e.getMessage());
////        }
////    }
////}
import com.jrishmani.Dashboardsend.mail.model.FormData;
import com.jrishmani.Dashboardsend.mail.repo.FormRepository;
import com.jrishmani.Dashboardsend.mail.service.EmailService;
import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/form")
public class FormController {
    @Autowired
    private FormRepository formRepository;

    @Autowired
    private EmailService emailService;

    @Autowired
    private JavaMailSender javaMailSender;

    @PostMapping("/submit")
    public ResponseEntity<String> submitForm(@RequestBody FormData formData) {
        formRepository.save(formData);
        sendEmail(formData.getEmail(), "https://docs.google.com/forms/d/e/1FAIpQLSej8Pmh1het0iwiL-9V_KTAS4dD0ttgvcs4RCc9nPxzHzCbZA/viewform?usp=sf_link");
        return ResponseEntity.ok("Form response saved successfully.");
    }

    private void sendEmail(String recipient, String formLink) {
        MimeMessage mimeMessage = javaMailSender.createMimeMessage();
        try {
            MimeMessageHelper helper = new MimeMessageHelper(mimeMessage, true);
            helper.setTo(recipient);
            helper.setSubject("Please fill out the form");

            String text = "<html><body>" +
                    "<p>Here is the link to the form: " +
                    "<a href='" + formLink + "'>" +
                    "<img src='cid:logoImage' alt='Image'  style='display: block; margin: 0 auto; width='100' height='100' >" +
                    "</a></p>" +
                    "<p>Thanks & Regards</p>" +
                    "<p>Manivasan P</p>" +
                    "<p>java developer</p>" +
                    "<p>9786502259</p>" +
                    "<p>manivasan@sightspectrum.in</p>" +
                    "<p><a href='www.sightspectrum.com'>www.sightspectrum.com</a></p>" +
                    "</body></html>";

            helper.setText(text, true);

            ClassPathResource image = new ClassPathResource("sight.png");
            helper.addInline("logoImage", image);

            javaMailSender.send(mimeMessage);
            System.out.println("HTML Email sent successfully to: " + recipient);
        } catch (MessagingException e) {
            System.err.println("Error sending HTML email: " + e.getMessage());
        }
    }
}


//LAST CODE
//import com.jrishmani.Dashboardsend.mail.model.FormData;
//import com.jrishmani.Dashboardsend.mail.repo.FormRepository;
//import com.jrishmani.Dashboardsend.mail.service.EmailService;
//import jakarta.mail.MessagingException;
//import jakarta.mail.internet.MimeMessage;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.core.io.ClassPathResource;
//import org.springframework.http.ResponseEntity;
//import org.springframework.mail.SimpleMailMessage;
//import org.springframework.mail.javamail.JavaMailSender;
//import org.springframework.mail.javamail.MimeMessageHelper;
//import org.springframework.web.bind.annotation.*;
//
//@RestController
//@RequestMapping("/form")
//public class FormController {
//    @Autowired
//    private FormRepository formRepository;
//
//    @Autowired
//    private EmailService emailService;
//    private JavaMailSender javaMailSender;
//
//    @PostMapping("/submit")
//    public ResponseEntity<String> submitForm(@RequestBody FormData formData) {
//        formRepository.save(formData);
//        sendEmail(formData.getEmail(), "https://docs.google.com/forms/d/e/1FAIpQLSej8Pmh1het0iwiL-9V_KTAS4dD0ttgvcs4RCc9nPxzHzCbZA/viewform?usp=sf_link");
//        return ResponseEntity.ok("Form response saved successfully.");
//    }
//    private void sendEmail(String recipient, String formLink) {
//        SimpleMailMessage message = new SimpleMailMessage();
//        message.setTo(recipient);
//        message.setSubject("Please fill out the form");
//        message.setText("Here is the link to the form: " + formLink+"\n" +
//                "\n" +
//                "Thanks & Regards\n" +
//                "Manivasan P\n" +
//                "\n" +
//                "java developer\n" +
//                "\n" +
//                "9786502259\n" +
//                "\n" +
//                "manivasan@sightspectrum.in\n" +
//                "\n" +
//                "www.sightspectrum.com\n" +
//                "\n");
//
//        try {
//            emailService.sendEmail(message);
//            System.out.println("Email sent successfully to: " + recipient);
//        } catch (Exception e) {
//            System.err.println("Error sending email: " + e.getMessage());
//        }
//    }
//}

//private void sendEmail(String recipient, String formLink) {
//    if (recipient == null) {
//        System.err.println("Recipient email address is null.");
//        return;
//    }
//
//    SimpleMailMessage message = new SimpleMailMessage();
//    message.setTo(recipient);
//    message.setSubject("Please fill out the form");
//    message.setText("Here is the link to the form: " + formLink);
//
//    try {
//        emailService.sendEmail(message);
//        System.out.println("Email sent successfully to: " + recipient);
//    } catch (Exception e) {
//        System.err.println("Error sending email: " + e.getMessage());
//    }
