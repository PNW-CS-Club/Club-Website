package website.pnwcsclub_backend.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.security.crypto.bcrypt.BCrypt;


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
     * Anything related to PostgreSQL will go below, example below:
     * /employee, and /addEmp
     * 
     */


     /*
      * This class is a data transfer object (DTO) that will be used to pass data between the frontend and the backend.
      */
     public static class EmployeeDTO {
        private int id;
        private String name;
        private String address;

        // Getters and setters
        public int getId() { return id; }
        public void setId(int id) { this.id = id; }
        public String getName() { return name; }
        public void setName(String name) { this.name = name; }
        public String getAddress() { return address; }
        public void setAddress(String address) { this.address = address; }
    }
  
     
    @Autowired
    private JdbcTemplate jdbcTemplate;

    /*
     * This function will return all employees in the database. The jdbcTemplate.queryForList
     * function will return a list of maps, where each map represents a row in the database.
     * The map will have the column names as keys and the column values as values.
     */
    @GetMapping("/employee")
    public String employee() {
        String sql = "SELECT * FROM employees";
        List<Map<String, Object>> rows;
        rows = jdbcTemplate.queryForList(sql); 
        return rows.toString();
    }

    /*
     * This function will add an employee to the database.
     */
    @PostMapping("/addEmp")
    public String addEmp(@RequestBody EmployeeDTO employee) {
        String sql = "INSERT INTO employees (name, address) VALUES (?, ?)";
        try {
            jdbcTemplate.update(sql,
                                employee.getName(),
                                employee.getAddress());
            return "Employee added successfully!";
        } catch (Exception e) {
            return "Error adding employee: " + e.getMessage();
        }
    }


    //TODO: FIXME: doesnt work :0
    @PostMapping("/create-login")
    public String createLogin(@RequestBody Map<String, String> login) {
        String pass_hash = BCrypt.hashpw(login.get("password"), BCrypt.gensalt());
        String sql = "INSERT INTO logins (username, password_hash) VALUES (?, ?)";
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
        String sql = "SELECT password_hash FROM logins WHERE username = ?";
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

}
