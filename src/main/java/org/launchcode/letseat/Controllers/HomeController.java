package org.launchcode.letseat.Controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class HomeController {

    @RequestMapping (value= "", method = RequestMethod.GET)
    public String index () {
        return "index";
    }

    @RequestMapping (value = "/register", method= {RequestMethod.POST, RequestMethod.GET})
    public String registerForm(){ return "/register"; }

     @RequestMapping  (value= "/welcome", method = RequestMethod.POST)
     public String welcome(){ return "/welcome"; }

     @GetMapping ("/logout")
    public String logout(){ return "/logout";}

    @GetMapping ("/index")
    public String registerComplete(){ return "/index";}
}
