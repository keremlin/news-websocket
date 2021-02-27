package ara.com.ara;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;

import java.io.IOException;
import java.net.MalformedURLException;
import java.net.URL;

import org.apache.http.HttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.methods.HttpUriRequest;
import org.apache.http.impl.client.HttpClientBuilder;
import org.apache.http.util.EntityUtils;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;


@SpringBootTest(webEnvironment = WebEnvironment.RANDOM_PORT)
class AraApplicationTests {
	TestRestTemplate restTemplate;
	URL base;
	@LocalServerPort
	int port;

	@BeforeEach
    public void setUp() throws MalformedURLException {
        restTemplate = new TestRestTemplate("keremlin", "321321");
        base = new URL("http://localhost:" + port);
    }
 
    @Test
    public void whenLoggedUserRequestsHomePage_ThenSuccess()
     throws IllegalStateException, IOException {
        ResponseEntity<String> response =
          restTemplate.getForEntity(base.toString(), String.class);
 
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertTrue(response.getBody().contains("thymeleaf"));
    }
 
    @Test
    public void whenUserWithWrongCredentials_thenUnauthorizedPage() 
      throws Exception {
 
        restTemplate = new TestRestTemplate("keremlin", "wrongpassword");
        ResponseEntity<String> response =
          restTemplate.getForEntity(base.toString(), String.class);
 
        assertEquals(HttpStatus.UNAUTHORIZED, response.getStatusCode());
        //assertTrue(response.getBody().contains("Unauthorized"));
    }
    @Test
    public void whenUserNameisAvailable() throws Exception{
      //Given
      HttpUriRequest request = new HttpGet( "http://localhost:8080//getCurrentUserName" );

      //When
      HttpResponse httpResponse = HttpClientBuilder.create().build().execute( request );
      
      //Then
      assertEquals(200,
      httpResponse.getStatusLine().getStatusCode()
          );
    }
    @Test
    public void isUserNameEmpty() throws Exception{
      //Given 
      HttpUriRequest request = new HttpGet( "http://localhost:8080//getCurrentUserName" );
      //When
      HttpResponse httpResponse = HttpClientBuilder.create().build().execute( request );
      //Then
      String responseBody=EntityUtils.toString(httpResponse.getEntity());
      assertFalse(responseBody.isEmpty());
    }

}
