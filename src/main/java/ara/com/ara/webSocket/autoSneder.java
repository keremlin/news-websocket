package ara.com.ara.webSocket;

import java.time.Instant;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import ara.com.ara.beans.AuthenticationFacade;

@EnableScheduling
@Component
public class autoSneder {
        @Autowired
        private SimpMessagingTemplate template;
        

        @Scheduled(fixedRate = 5000)
        public void fireGreeting() {
           
            String temp= Instant.now().toString();
            this.template.convertAndSend("/topic/now",temp);
            //System.out.println(temp); 
        }
}
