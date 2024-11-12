import axios from "axios";

export default axios.create({
  baseURL: "https://pnwcsclub.com/api",
  headers: {
    "Content-type": "application/json"
  }
});