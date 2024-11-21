package website.pnwcsclub_backend.configuration;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            .csrf(csrf -> csrf.disable())  // Disable CSRF,(CSRF is a security feature that prevents unauthorized requests to your server)
            .authorizeHttpRequests(auth -> auth
                .anyRequest().permitAll())  // Allow all requests
            .httpBasic(basic -> basic.disable())  // Disable HTTP Basic auth
            .formLogin(form -> form.disable());   // Disable form login
        
        return http.build();
    }
}