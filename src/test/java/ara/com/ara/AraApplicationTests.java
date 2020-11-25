package ara.com.ara;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

import java.io.IOException;
import java.net.MalformedURLException;
import java.net.URL;

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

}
