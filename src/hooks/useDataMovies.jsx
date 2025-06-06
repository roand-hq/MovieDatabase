import { useEffect } from "react";
import { url } from "../../utils/apiUrl";
import { toast } from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import { useFetchMovies } from "./useFetchMovies";

const useDataMovies = (methods) => {
  const { getMovieById, getMovies } = useFetchMovies();
  const { id } = useParams();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = methods;
  const navigate = useNavigate()

};
