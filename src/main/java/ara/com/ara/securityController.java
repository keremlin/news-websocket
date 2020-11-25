package ara.com.ara;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class securityController{
    @RequestMapping("/login")
    public String  login(Model model,@RequestParam (required=false)  boolean fail){
        
        if(fail)
            model.addAttribute("errorMessage","notOk");
        else
            model.addAttribute("errorMessage","OK");

        return "login";
    }
}