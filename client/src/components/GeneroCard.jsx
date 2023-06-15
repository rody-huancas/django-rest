import { useNavigate } from "react-router-dom";
import { deleteGenero } from "../api/genero.api";
import Swal from "sweetalert2";
import { Toast } from "../helpers/alerts";

export const GeneroCard = ({ generoItem, onGeneroDeleted }) => {
  const navigate = useNavigate();

  const handleDelete = async () => {
    const result = await Swal.fire({
      icon: "warning",
      title: "¿Estás seguro?",
      text: "Esta acción eliminará el género.",
      showCancelButton: true,
      confirmButtonText: "Sí",
      cancelButtonText: "Cancelar",
    });

    if (result.isConfirmed) {
      await deleteGenero(generoItem.id);
      onGeneroDeleted(generoItem.id);
      Toast.fire({
        icon: "success",
        title: "Género eliminado correctamente",
      });
    }
  };

  return (
    <div className="w-[300px] h-[200px] bg-sky-100 text-gray-900 rounded-lg shadow shadow-slate-50 flex flex-col justify-center items-center gap-5 p-5">
      <h2 className="font-bold uppercase text-lg text-center">
        {generoItem.nombre}
      </h2>
      <div className="flex items-center gap-5">
        <button
          onClick={() => navigate(`/genero/${generoItem.id}`)}
          className="bg-indigo-600 px-7 py-2 rounded-md text-white font-medium hover:bg-indigo-800 transition-colors"
        >
          Editar
        </button>
        <button
          onClick={handleDelete}
          className="bg-red-600 px-5 py-2 rounded-md text-white font-medium hover:bg-red-800 transition-colors"
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};
