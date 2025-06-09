import { useNavigate } from "react-router-dom";
import { useFetchMovies } from "../hooks/useFetchMovies";
import { Card } from "../components/Card";
import { useMovieActions } from "../hooks/useMovieActions";

const Home = () => {
  const navigate = useNavigate();
  const { movies, loading, getMovies } = useFetchMovies();
  const { deleteMovie, handleUpdateMovie } = useMovieActions(getMovies);

  if (loading)
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div
          className="spinner-border text-primary"
          role="status"
          aria-label="loading"
        >
          <span className="visually-hidden">Cargando...</span>
        </div>
      </div>
    );
  console.log(movies);
  return (
    <>
      {/* Botón fijo para agregar */}
      <button
        onClick={() => navigate("/add-movie")} // cambiar alert por navegar a formulario
        className="btn btn-success w-100 fs-4 fw-bold rounded-0 position-fixed top-0 start-0 shadow"
        style={{ zIndex: 1050, height: "60px" }}
        aria-label="Agregar entrada"
      >
        + Agregar entrada
      </button>

      {/* Contenedor principal con padding superior para no tapar el botón */}
      <div className="container pt-5 mt-5">
        <h1 className="mb-4 text-center text-primary fw-bold">
          Movie Database
        </h1>

        {/* Grid con cards */}
          <div className="row g-4 justify-content-center">
            {movies?.length === 0 && (
              <p className="text-center text-muted">
                No hay películas para mostrar.
              </p>
            )}
            {movies?.map((movie) => (
              <div
                key={movie.id}
                className="col-auto"
              >
                <div className="w-100" style={{ maxWidth: "24rem" }}>
                  <Card
                    title={movie.titulo || movie.pelicula}
                    genre={movie.genero}
                    year={movie.anio || movie.estreno}
                    director={movie.director}
                    rating={movie.calificacion}
                    onDelete={() => {
                      if (
                        window.confirm(
                          `¿Eliminar la reseña de la película "${
                            movie.titulo || movie.pelicula
                          }"?`
                        )
                      ) {
                        deleteMovie(movie.id);
                      }
                    }}
                    onUpdate={() => handleUpdateMovie(movie.id)}
                  />
                </div>
              </div>
            ))}
          </div>
      </div>
    </>
  );
};

export { Home };
