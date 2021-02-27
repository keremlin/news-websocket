package ara.com.ara;

import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class apiController {
    @CrossOrigin
    @RequestMapping("/getCurrentUserName")
    public String getCurrentUserName() {
        Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        String username="";
        if (principal instanceof UserDetails) {
            username = ((UserDetails) principal).getUsername();
        } else {
             username = principal.toString();
        }
        return username;
    }
}