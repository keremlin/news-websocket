package ara.com.ara.beans;

public class OutputMessage {

    private String from;
    private String text;
    private String time;
    private int type;

    public OutputMessage(final String from, final String text, final String time,final int type) {

        this.from = from;
        this.text = text;
        this.time = time;
        this.type = type;
    }
    public int getType(){
        return type;
    }

    public String getText() {
        return text;
    }

    public String getTime() {
        return time;
    }

    public String getFrom() {
        return from;
    }
}
