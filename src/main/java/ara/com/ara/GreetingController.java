package ara.com.ara;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;

import java.time.Instant;

@Controller
public class GreetingController {

    private static final Logger logger = LoggerFactory.getLogger(GreetingController.class);

    private final SimpMessagingTemplate simpMessagingTemplate;

    public GreetingController(SimpMessagingTemplate simpMessagingTemplate) {
        this.simpMessagingTemplate = simpMessagingTemplate;
    }

    @MessageMapping("/greetings")
    public void greet(String greeting) {
        logger.info("Greeting for {}", greeting);

        String text = "[" + Instant.now() + "]: " + greeting;
        this.simpMessagingTemplate.convertAndSend("/topic/greetings", text);
    }
    @MessageMapping("/news")
    public void news(String news) {
        logger.info("News for {}", news);
        
        String text = "[" + Instant.now() + "]: " + news;
        this.simpMessagingTemplate.convertAndSend("/topic/news", text);
    }

}
