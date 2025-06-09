import { url } from "../utils/apiUrl";
import {toast} from "react-hot-toast"
import { useNavigate } from "react-router-dom";
const useMovieActions = (getMovies)=>{
  const navigate = useNavigate()
    const deleteMovie = async(id)=>{
        try {
            const response = await fetch(`${url}/${id}`, {
              method: "DELETE",
            });
            toast.success("Pelicula eliminada correctamente");
            console.log("movie deleted:", response);
            getMovies();
          } catch (error) {
            console.error("Error deleting movie:", error);
            toast.error("Error al eliminar pelicula");
          } finally {
            getMovies();
          }
    }

    const handleUpdateMovie = (id)=>{
       navigate(`/movie/${id}`);
    }
    return{deleteMovie, handleUpdateMovie}
}
export {useMovieActions}

