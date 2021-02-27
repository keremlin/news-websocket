package ara.com.ara;

import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;


@RestController
public class apiController {
    private final Logger log = LoggerFactory.getLogger(apiController.class);
    @CrossOrigin
    @RequestMapping("/getCurrentUserName")
    public String getCurrentUserName() {
        log.info("api is fetch");
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