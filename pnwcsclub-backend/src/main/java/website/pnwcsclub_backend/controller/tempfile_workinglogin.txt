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
     
    @Autowired
    private JdbcTemplate jdbcTemplate;

    @Value("${auth.code}")
    private String validAuthCode;

    

    /*
     * LOGIN SYSTEM
     */

    @PostMapping("/createLogin")
    public String createLogin(@RequestBody Map<String, String> login) {
        String authCode = login.get("authCode");
        if (!authCode.equals(validAuthCode)) {
            return "Invalid auth code!";
        }
        String pass_hash = BCrypt.hashpw(login.get("password"), BCrypt.gensalt());
        String sql = "INSERT INTO users (username, password_hash) VALUES (?, ?)";
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
        List<Map<String, Object>> rows;
        rows = jdbcTemplate.queryForList(sql, login.get("username"));
        Map<String, String> response = new HashMap<>();
        if (rows.size() == 0) {
            response.put("message", "Login failed!");
        } else {
            String storedHash = (String) rows.get(0).get("password_hash");
            if (BCrypt.checkpw(login.get("password"), storedHash)) {
                // Generate a simple token for demonstration purposes
                String token = UUID.randomUUID().toString();
                response.put("message", "Login successful!");
                response.put("token", token);
            } else {
                response.put("message", "Login failed!");
            }
        }
        return response;
    }
}
