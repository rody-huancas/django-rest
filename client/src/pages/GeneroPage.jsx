import { useEffect, useState } from "react";
import { getAllGeneros } from "../api/genero.api";
import { GeneroCard } from "../components/GeneroCard";

export const GeneroPage = () => {
  const [genero, setGenero] = useState([]);

  useEffect(() => {
    async function loadGenero() {
      const { data } = await getAllGeneros();
      setGenero(data);
    }
    loadGenero();
  }, []);

  const handleGeneroDeleted = (generoId) => {
    setGenero((prevGenero) =>
      prevGenero.filter((generoItem) => generoItem.id !== generoId)
    );
  };

  return (
    <div className="w-[1024px] mx-auto flex flex-col justify-center items-center mt-10">
      <p className="text-2xl uppercase font-bold text-white">
        {genero.length === 0
          ? "No se ha creado ningún género."
          : "Mis Lista de Géneros"}
      </p>

      <div className="grid grid-cols-3 gap-10 mt-10">
        {genero.map((generoItem) => (
          <GeneroCard
            key={generoItem.id}
            generoItem={generoItem}
            onGeneroDeleted={handleGeneroDeleted}
          />
        ))}
      </div>
    </div>
  );
};
