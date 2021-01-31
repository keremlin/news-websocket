package ara.com.ara.beans;

import org.springframework.security.core.Authentication;

public interface IAuthenticationFacade {
    Authentication getAuthentication();
    String getUserName();
}
