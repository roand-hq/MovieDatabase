import { useEffect } from "react";
import { url } from "../utils/apiUrl";
import { toast } from "react-hot-toast";
import { data, useNavigate, useParams } from "react-router-dom";
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
  const navigate = useNavigate();

  //esta funcion guarda las peliculas y manda los datos a la API
  const saveMovieForm = async (dataForm) => {
     dataForm.calificacion = parseInt(dataForm.calificacion)
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataForm),
      });
      if (!response.ok) {
        toast.error("Error al agregar reseña");
        throw new Error("Error al agregar reseña");
      }
      toast.success("Reseña agregada exitosamente");
      navigate("/Home");
    } catch (error) {
      console.log("Error al  enviado:", error);
    } finally {
      reset();
      getMovies();
    }
  };

  // Esta función se llama cuando se envía el formulario de edición
  // y envía una solicitud PUT a la API para actualizar los datos de la película
  const editMovie = async (dataForm) => {
    
    try {
      dataForm.calificacion = parseInt(dataForm.calificacion)
      const response = await fetch(`${url}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataForm),
      });
      if (!response.ok) {
        toast.error("Error al actualizar reseña");
        throw new Error("Error al actualizar reseña");
      }
      toast.success("Reseña actualizada");
      navigate("/Home");
    } catch (error) {
      console.error("Error al actualizar reseña: " + error);
      toast.error("Error al actualizar reseña");
    } finally {
      reset();
      getMovies();
    }
  };

  // Esta función se llama cuando se envía el formulario
  // y decide si guardar una nueva pelicula o editar una existente
  // dependiendo de si hay un id presente en los parámetros de la URL
  // Si hay un id, se llama a editMovie, de lo contrario se llama a saveMovieForm
  const handleUserAction = (dataForm) => {
    if (id) editMovie(dataForm);
    else saveMovieForm(dataForm);
  };
  // Función para manejar la actualización de una pelicula
  // Esta función se llama cuando se hace clic en el botón de editar
  // y redirige al usuario a la página de edición de la pelicula
  // pasando el id de la pelicula como parámetro en la URL
  const handleUpdateMovie = (id) => {
    navigate(`/movie/${id}`);
  };
  // Cargar los datos de la pelicula por id
  // Esta función se llama para obtener los datos de la pelicula cuando el componente se monta o cuando cambia el id
  const loadMovie = async () => {
    if (id) {
      const movie = await getMovieById(id);
      if (movie) {
        reset({
          titulo: movie.titulo || movie.pelicula,
          anio: movie.anio || movie.estreno,
          director: movie.director,
          calificacion: movie.calificacion,
          genero: movie.genero,
        });
      }
    }
  };

  useEffect(() => {
    loadMovie();
  }, [id]); // Dependencia en id para recargar los datos si cambia

  return {
    register,
    handleSubmit: handleSubmit(handleUserAction),
    errors,
    getMovieById,
    handleUpdateMovie,
    loadMovie,
  };
};
export { useDataMovies };
