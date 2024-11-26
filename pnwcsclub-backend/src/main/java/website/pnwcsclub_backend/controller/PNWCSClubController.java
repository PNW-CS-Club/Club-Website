package website.pnwcsclub_backend.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;



@CrossOrigin
@RestController
@RequestMapping("/api")
public class PNWCSClubController {

    /*
     * This file is the main space that backend functions will be implemented in.
     * You create a new function by adding a new @GetMapping or @PostMapping annotation
     * above a new function. The @GetMapping annotation specifies the URL that the
     * function will be called at. The @PostMapping annotation specifies the URL that
     * the function will be called at, as well as the type of request that will be
     * made to the server. The function itself should return the data that you want
     * to send back to the frontend.
     * 
     * An example below:
     */
    @GetMapping("/test")
    public String test() {
        return "Hello, test1!";
    }

    @GetMapping("/test2")
    public String test2() {
        return "Hello, test2!";
    }

    /*
     * Helper functions for login system.
     */

    // Check if the password is strong enough
    // Based on these requirements a password must be at least 8 characters long,
    // contain at least one uppercase letter, one lowercase letter, one number, and
    // one special character.
    private boolean isPasswordStrong(String password) {
        return password.length() >= 8 &&
        password.matches(".*[A-Z].*") &&
        password.matches(".*[a-z].*") &&
        password.matches(".*[0-9].*") &&
        password.matches(".*[!@#$%^&*].*"); 
    }

    //TODO: Implement a function to check if a token is valid
    //TODO: add a rate limiting system to prevent brute force attacks


    /*
     * LOGIN SYSTEM
     * |_ createLogin
     * |_ login
     * |_ getUsername
     * |_ logout
     */
    
    @Autowired
    private JdbcTemplate jdbcTemplate;

    // Get the auth code from the application.properties file
    @Value("${auth.code}")
    private String validAuthCode;

    @PostMapping("/createLogin")
    public String createLogin(@RequestBody Map<String, String> login) {
        String authCode = login.get("authCode");
        if (!authCode.equals(validAuthCode)) {
            return "Invalid auth code!";
        }
        if (!isPasswordStrong(login.get("password"))) {
            return "Password is not strong enough!";
        }
        String pass_hash = BCrypt.hashpw(login.get("password"), BCrypt.gensalt()); // Hash the password
        String sql = "INSERT INTO users (username, password_hash) VALUES (?, ?)";
        // Try to insert the login into the database
        try {
            jdbcTemplate.update(sql, 
                                login.get("username"),
                                pass_hash);
            return "Login created successfully!";
        } catch (Exception e) {
            return "Error creating login: " + e.getMessage();
        }
    }

    @PostMapping("/login")
    public Map<String, String> login(@RequestBody Map<String, String> login) {
        String sql = "SELECT password_hash FROM users WHERE username = ?";
        List<Map<String, Object>> rows; // List of rows returned by the query
        rows = jdbcTemplate.queryForList(sql, login.get("username"));
        Map<String, String> response = new HashMap<>(); 
        if (rows.isEmpty()) {
            response.put("message", "Login failed!");
        } else {
            // Check if the password matches the stored hash
            String storedHash = (String) rows.get(0).get("password_hash");
            if (BCrypt.checkpw(login.get("password"), storedHash)) {
                // Generate a simple token for demonstration purposes //TODO: Implement a more secure token system
                String token = UUID.randomUUID().toString();
                response.put("message", "Login successful!");
                response.put("token", token); //TODO: Store this token in the database and check if unique
                
                String updateToken = "UPDATE users SET auth_token = ? WHERE username = ?";
                jdbcTemplate.update(updateToken, token, login.get("username")); // Update the token in the database
            } else {
                response.put("message", "Login failed!");
            }
        }
        return response;
    }



    @GetMapping("/username")
    public String getUsername(@RequestHeader("Authorization") String token) {
        String authToken = token.replace("Bearer ", "");
        String sql = "SELECT username FROM users WHERE auth_token = ?";
        List<Map<String, Object>> rows = jdbcTemplate.queryForList(sql, authToken);
        if (rows.isEmpty()) {
            return "Invalid token!";
        } else {
            return (String) rows.get(0).get("username");
        }
    }


    @PostMapping("/logout") 
    public String logout(@RequestBody Map<String, String> login) {
        String sql = "UPDATE users SET auth_token = NULL WHERE auth_token = ?";
        try {
            jdbcTemplate.update(sql, login.get("auth_token"));
            return "Logout successful!";
        } catch (Exception e) {
            return "Error logging out: " + e.getMessage();
        }
    }
}
