import { SelectInput } from "../components/SelectInput"
import { InputText } from "../components/InputText"
import { Button } from "../components/Button"
import { useForm } from "react-hook-form"
import { useDataMovies } from "../hooks/useDataMovies"
import { Link } from "react-router-dom"
import { optionSelect } from "../utils/apiUrl"
const AddMovie = () => {
  const methods = useForm()
  const { register, handleSubmit, errors } = useDataMovies(methods) // aquí usamos el handleSubmit del hook

  return (
    <div className="container mt-4" style={{ maxWidth: '600px' }}>
      <h2 className="mb-4 text-center">Agregar Película</h2>

      <form onSubmit={handleSubmit}>

        <InputText
          label="Título"
          name="titulo"
          register={register}
          error={errors.titulo}
          placeholder="Ingresa el título"
        />

        <InputText
          label="Director"
          name="director"
          register={register}
          error={errors.director}
          placeholder="Nombre del director"
        />

        <InputText
          label="Año"
          name="anio"
          type="number"
          register={register}
          error={errors.anio}
          placeholder="Año de lanzamiento"
        />

        <SelectInput
          label="Género"
          name="genero"
          register={register}
          error={errors.genero}
          options={[
            { value: "Accion", label: "Acción" },
            { value: "Drama", label: "Drama" },
            { value: "Comedia", label: "Comedia" },
            { value: "Ciencia ficcion", label: "Ciencia Ficción" },
          ]}
        />

        <SelectInput
          label="Calificación"
          name="calificacion"
          register={register}
          error={errors.calificacion}
          options={optionSelect}
        />

        <div className="mt-4 d-flex justify-content-center">
          <Button
            type="submit"
            text="Guardar"
            color="primary"
            icon="save"
            style={{ minWidth: '120px' }}
          />

          <Link to="/Home" className="btn btn-secondary ms-2" style={{ minWidth: '120px' }}>
            Cancelar
          </Link>
        </div>
      </form>
    </div>
  )
}

export { AddMovie }
