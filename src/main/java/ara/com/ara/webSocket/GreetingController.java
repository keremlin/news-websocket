package ara.com.ara.webSocket;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.Header;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;

import ara.com.ara.beans.Message;
import ara.com.ara.beans.OutputMessage;

import java.security.Principal;
import java.text.SimpleDateFormat;
import java.time.Instant;
import java.util.Date;

@Controller
public class GreetingController {
    
    @Autowired
    private static final Logger logger = LoggerFactory.getLogger(GreetingController.class);

    private final SimpMessagingTemplate simpMessagingTemplate;

    public GreetingController(SimpMessagingTemplate simpMessagingTemplate) {
        this.simpMessagingTemplate = simpMessagingTemplate;
    }

    @MessageMapping("/greetings")
    public void greet(String greeting) {
        logger.info("Greeting for {}", greeting);

        String text = "[" + getTime() + "]: " + greeting;
        this.simpMessagingTemplate.convertAndSend("/topic/greetings", text);
    }
    @MessageMapping("/news")
    public void news(String news,Principal principal) { 
        String text = "["+principal.getName() +"--" + getTime()+ "]: " + news;
        logger.info("News for {}", text);
        this.simpMessagingTemplate.convertAndSend("/topic/news", text);
    }
    // return the time format
    private String getTime(){
        return new SimpleDateFormat("HH:mm:ss").format(new Date());
    }

    @MessageMapping("/secured/room")
    public void sendSpecific(@Payload Message msg, Principal user, @Header("simpSessionId") String sessionId)
            {
                System.out.println("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx subscribe to private chat");
        OutputMessage out = new OutputMessage(msg.getFrom(), msg.getText(),
                new SimpleDateFormat("HH:mm").format(new Date()));
        simpMessagingTemplate.convertAndSendToUser(msg.getTo(), "/secured/user/queue/specific-user", out);
    }

}
