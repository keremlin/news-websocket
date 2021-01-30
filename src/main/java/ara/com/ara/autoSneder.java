package ara.com.ara;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import ara.com.ara.webSocket.OutputMessage;

@EnableScheduling
@Component
public class autoSneder {
        @Autowired
        private SimpMessagingTemplate template;
    
        @Scheduled(fixedRate = 60000)
        public void fireGreeting() {
            this.template.convertAndSend("/topic/messages", new OutputMessage("Server","Heartbeat","now"));
        }
      
}
