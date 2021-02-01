package ara.com.ara.webSocket;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationListener;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Component;
import org.springframework.web.socket.messaging.SessionConnectEvent;
import ara.com.ara.beans.*;

@Component
public class eventListener implements ApplicationListener<SessionConnectEvent> {
    @Autowired
    private SimpMessagingTemplate messagingTemplate;

    public void onApplicationEvent(SessionConnectEvent event) {
        
        this.messagingTemplate.convertAndSend("/topic/news",
          new OutputMessage("User is now online : ",event.getUser().getName(),"now"));
        //this.messagingTemplate.convertAndSendToUser(event.getUser().getName(), "/queue/reply", "I just connected");
        System.out.println("event just handled --> "+event.getUser().getName());
        this.messagingTemplate.convertAndSendToUser("Admin",
             "/topic/news", new OutputMessage("Here you are : ",event.getUser().getName()," Wellcome"));
    }

}