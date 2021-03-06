package ara.com.ara.beans;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.session.SessionRegistry;
import org.springframework.stereotype.Service;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;

@Service
public class userManagement {

    @Autowired
    private SessionRegistry sessionRegistry;

    public String getCurrentUser(){
        Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        String username="";
        if (principal instanceof UserDetails) {
            username = ((UserDetails) principal).getUsername();
        } else {
             username = principal.toString();
        }
        return username;
    }

    public List<Object> getUsersFromSessionRegistry() {
        return sessionRegistry.getAllPrincipals().stream()
                .filter(u -> !sessionRegistry.getAllSessions(u, true).isEmpty())
                .collect(Collectors.toList());
    }

    public List<String> getOnlineUsers() {

        List<String> retValue = new ArrayList<String>();
        List<Object> onlineUsers = getUsersFromSessionRegistry();// sessionRegistry.getAllPrincipals();
        for (Object usr : onlineUsers) {
            retValue.add(((User) usr).getUsername());
        }
        return retValue;

    }
    public String[] getAllUsers(){
        String[] temp={"Admin","keremlin","Arash","Hadi","Samad"};
        return (temp);
    }


}
