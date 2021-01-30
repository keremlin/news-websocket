package ara.com.ara.webSocket;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;

@Controller
public class ChatController {

    //list of all chats from the server start
    ArrayList<OutputMessage> newsList;
    
    //init the news list and set the start
    public ChatController(){
        newsList=new ArrayList<OutputMessage>();
        newsList.add(new OutputMessage("","Server started",getTime()));
    }
    // when a message was sent this will returned 
    // it to other users.
    @MessageMapping("/chat")
    @SendTo("/topic/messages")
    public OutputMessage send(final Message message) throws Exception {
        // get now time
        final String time = getTime();
        //save the message just recieved
        System.out.println("message is sent :"+message.getText());        
        newsList.add(new OutputMessage(message.getFrom(), message.getText(), time));

        return newsList.get(newsList.size()-1);
    }
    // return the time format
    private String getTime(){
        return new SimpleDateFormat("HH:mm:ss").format(new Date());
    }
 
}
