package ara.com.ara;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.User;
import org.springframework.stereotype.Controller;

import ara.com.ara.beans.IAuthenticationFacade;

import org.springframework.security.core.annotation.AuthenticationPrincipal;

import java.security.Principal;
import java.time.Instant;

@Controller
public class GreetingController {
    @Autowired
    private IAuthenticationFacade auth;

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
    public void news(String news,Principal principal) { 
        String text = "["+principal.getName() +"--" + Instant.now() + "]: " + news;
        logger.info("News for {}", text);
        this.simpMessagingTemplate.convertAndSend("/topic/news", text);
    }

}
