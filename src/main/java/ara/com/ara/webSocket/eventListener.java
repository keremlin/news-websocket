package ara.com.ara.webSocket;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationListener;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Component;
import org.springframework.web.socket.messaging.SessionConnectEvent;
import ara.com.ara.beans.*;

import java.text.SimpleDateFormat;
import java.util.Date;

@Component
public class eventListener implements ApplicationListener<SessionConnectEvent> {
  @Autowired
  private SimpMessagingTemplate messagingTemplate;

  public void onApplicationEvent(SessionConnectEvent event) {
    this.messagingTemplate.convertAndSend("/topic/news", new OutputMessage(
      "System",
      event.getUser().getName()+" is online!",
         
         new SimpleDateFormat("HH.mm.ss").format(new Date()),
         1
         ));
  }

}