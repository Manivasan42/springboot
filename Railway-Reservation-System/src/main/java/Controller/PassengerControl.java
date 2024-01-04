package Controller;

import model.Passenger;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@RequestMapping("/reservation")

@RestController
public class PassengerControl {
    @GetMapping("/loginform")
    public String loginForm(Model models)
    {
        Passenger res=new Passenger();
        models.addAttribute("reservation", res);
        return "hello";
    }
    @RequestMapping("/bookingForm")
    public String bookingForm(Passenger model)
    {
        Passenger res=new Passenger();
        model.addAttribute("reservation", res);
        return "reservation-page";
    }
    @RequestMapping("/submitForm")
    public String submitForm(@ModelAttribute("reservation") Passenger res)
    {
        return "confirmation-form";
    }
}
