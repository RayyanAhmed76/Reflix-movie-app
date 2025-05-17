import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNjQxODBkODljYjA2NTgzMTQ1ZDlhOGU5YTdlYWY5ZiIsIm5iZiI6MTc0NzQ2NzgyNC40NDUsInN1YiI6IjY4MjgzZTMwZjZjZjIwNzZmM2UyNDE0YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BmAwHTK8QIS4ta2bGgDxZ6IKhWVqWpFSPjntmTXRSX8",
  },
});

export default instance;
