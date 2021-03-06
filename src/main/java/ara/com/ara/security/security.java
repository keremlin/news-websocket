package ara.com.ara.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.session.SessionRegistry;
import org.springframework.security.core.session.SessionRegistryImpl;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
@EnableWebSecurity
public class security extends WebSecurityConfigurerAdapter {
    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
    PasswordEncoder encoder = 
          PasswordEncoderFactories.createDelegatingPasswordEncoder();
    	auth
          .inMemoryAuthentication()
          .withUser("Admin")
          .password(encoder.encode("321321"))
          .roles("ADMIN")
          .and()
          .withUser("keremlin")
          .password(encoder.encode("321321"))
          .roles("USER", "ADMIN");
    }

    @Bean
    public SessionRegistry sessionRegistry() {
          return new SessionRegistryImpl();
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
        .cors()
        .and()
          .authorizeRequests().antMatchers("/getCurrentUserName").authenticated()
          .anyRequest()
          .authenticated()
          .and()
          .csrf().disable()
          .formLogin().loginPage("/login").failureUrl("/login?fail=true").defaultSuccessUrl("http://localhost:3000")
          
          .permitAll()
          .and()
          .sessionManagement()
            .maximumSessions(1).sessionRegistry(sessionRegistry());
    }
    
}
