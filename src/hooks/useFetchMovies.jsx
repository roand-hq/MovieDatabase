import { useEffect, useState } from "react";
import { url } from "../utils/apiUrl";
import { toast } from "react-hot-toast";

const useFetchMovies = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("Error fetching movies");
      const data = await response.json();
      setMovies(data);
      setLoading(false);
    } catch (error) {}
  };

  const getMovieById = async (id) => {
    try {
      const response = await fetch(`${url}/${id}`);
      if (!response.ok) {
        console.log("Failed to fetch user");
        throw new Error("Failed to fetch user");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching user:", error);
      console.log("Failed to fetch user");
      return null;
    }
  };

  useEffect(() => {
    getMovies();
  }, []);
  return { movies, getMovieById, getMovies, loading };
};

export { useFetchMovies };
