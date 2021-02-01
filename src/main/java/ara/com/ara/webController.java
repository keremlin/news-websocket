package ara.com.ara;

import java.util.ArrayList;

import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import ara.com.ara.beans.*;

@Controller
public class webController {
    ArrayList<OutputMessage> news;  
    @RequestMapping("/")
    public String index(Model model){
        model.addAttribute("currentUser", SecurityContextHolder.getContext().getAuthentication().getName());
        return "home";
    }
}
