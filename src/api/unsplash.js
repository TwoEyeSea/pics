import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID uyojAcvL3i5GzARBDhnFQlQ34joOii7ZE3qUkAjKqjo",
  },
});
