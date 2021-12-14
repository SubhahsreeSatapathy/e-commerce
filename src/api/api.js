import axios from "axios";

export  function getDetails() {
  return axios.get("https://fakestoreapi.com/products");
}
