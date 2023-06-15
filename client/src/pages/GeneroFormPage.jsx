import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { createGenero, getGenero, updateGenero } from "../api/genero.api";
import { Toast } from "../helpers/alerts";

export const GeneroFormPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const navigate = useNavigate();
  const params = useParams();

  const onSubmit = handleSubmit(async (data) => {
    if (params.id) await updateGenero(params.id, data);
    else await createGenero(data);
    Toast.fire({
      icon: "success",
      title: params.id
        ? "Género actualizado correctamente"
        : "Género creado correctamente",
    });
    navigate("/");
  });

  useEffect(() => {
    async function loadGeneros() {
      if (params.id) {
        const res = await getGenero(params.id);
        setValue("nombre", res.data.nombre);
      }
    }
    loadGeneros();
  });

  return (
    <>
      <div className="w-[1024px] mx-auto mt-5 flex flex-col items-center">
        <h3 className="text-2xl uppercase my-5 font-bold">
          Crear nuevo género
        </h3>
        <form onSubmit={onSubmit} className="flex flex-col gap-5">
          <input
            type="text"
            className="w-[400px] py-3 px-2 rounded-md text-gray-800 text-xl outline-none placeholder:text-gray-600"
            placeholder="Ingrese el nombre del genero."
            {...register("nombre", { required: true })}
          />
          {errors.nombre && (
            <span className="bg-red-500 text-white p-2 rounded-md text-center font-medium uppercase">
              Ingrese el nombre
            </span>
          )}

          <button className="w-1/2 mx-auto bg-green-700 py-2.5 rounded-md font-bold uppercase hover:bg-green-800 transition-colors">
            {params.id ? "Editar Género" : "Crear Género"}
          </button>
        </form>
      </div>
    </>
  );
};
