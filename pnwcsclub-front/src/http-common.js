import axios from "axios";

export default axios.create({
  baseURL: "https://pnwcsclub.com/api",  // <--- use this for production
  //baseURL: "http://localhost:8080/api",   <--- use this for local testing
  headers: {
    "Content-type": "application/json"
  }
});