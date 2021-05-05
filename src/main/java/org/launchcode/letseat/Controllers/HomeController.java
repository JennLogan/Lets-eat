package org.launchcode.letseat.Controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class HomeController {

    @RequestMapping ("")
    public String start () { return "/index"; }

    @RequestMapping (value = "/search", method= {RequestMethod.POST, RequestMethod.GET})
    public String registerForm(){ return "/search"; }
//
//     @RequestMapping  (value= "/welcome", method = RequestMethod.POST)
//     public String welcome(){ return "/welcome"; }
//
// @RequestMapping (value ="/logout")
//    public String logout(){ return "login";}

}
