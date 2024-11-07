package website.pnwcsclub_backend.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
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
     * Anything related to PostgreSQL ---------TODO: fill out
     */
  
     
    @Autowired
    private JdbcTemplate jdbcTemplate;

    @GetMapping("/employee")
    public String employee() {
        String sql = "SELECT * FROM employees";
        List<Map<String, Object>> rows;
        rows = jdbcTemplate.queryForList(sql);
        return rows.toString();
    }

    @GetMapping("/addEmp")
    public String addEmp(int id, String name, String address) {
        String sql = "INSERT INTO employees (id, name, address) VALUES (?, ?, ?)";
        jdbcTemplate.update(sql, id, name, address);
        return "Employee added!";
    }

}
