package ara.com.ara;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ara.com.ara.beans.userManagement;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@RestController
public class apiController {
    private final Logger log = LoggerFactory.getLogger(apiController.class);

    @Autowired
    private userManagement usermanagement;
    
    @CrossOrigin
    @RequestMapping("/api/getCurrentUserName")
    public String getCurrentUserName() {
        return usermanagement.getCurrentUser();
    }

    @CrossOrigin
    @RequestMapping("/api/getAllUsers")
    public String[] getAllUsers(){
      
        return(usermanagement.getAllUsers());
    }

    @CrossOrigin
    @RequestMapping("/api/getOnlineUsers")
    public List<String> getOnlineUsers(){
        return usermanagement.getOnlineUsers();
    }
}