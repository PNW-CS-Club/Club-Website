package website.pnwcsclub_backend.controller;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
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


    /*
     * LOGIN SYSTEM
     */
    private String getValidAuthCode() {
        String validAuthCode;
        try {
            validAuthCode = new String(Files.readAllBytes(Paths.get("src/main/resources/login-auth.txt")));
        } catch (IOException e) {
            e.printStackTrace();
            validAuthCode = "";
        }
        return validAuthCode;
    }

    @PostMapping("/createLogin")
    public String createLogin(@RequestBody Map<String, String> login) {
        String authCode = login.get("authCode");
        if (!authCode.equals(getValidAuthCode())) {
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
    public String login(@RequestBody Map<String, String> login) {
        String sql = "SELECT password_hash FROM users WHERE username = ?";
        List<Map<String, Object>> rows;
        rows = jdbcTemplate.queryForList(sql, login.get("username"));
        if (rows.size() == 0) {
            return "Login failed!";
        } else {
            String storedHash = (String) rows.get(0).get("password_hash");
            if (BCrypt.checkpw(login.get("password"), storedHash)) {
                return "Login successful!";
            } else {
                return "Login failed!";
            }
        }
    }

    //TEMPORARY REMOVE LATER TODO: REMOVE
    @GetMapping("/getLogin")
    public String getLogin() {
        String sql = "SELECT * FROM users";
        List<Map<String, Object>> rows;
        rows = jdbcTemplate.queryForList(sql); 
        return rows.toString();
    }
}
