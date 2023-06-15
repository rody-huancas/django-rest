import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <header className="h-[90px] bg-slate-900">
        <div className="w-[1024px] h-[100%] mx-auto flex justify-between items-center gap-5">
          <Link to="/">
            <h1 className="font-bold text-2xl text-[#39bc69]">APP</h1>
          </Link>
          <nav>
            <ul className="flex justify-center items-center gap-10">
              <li>
                <Link
                  className="font-medium text-xl hover:text-[#39bc69] transition-colors"
                  to="/"
                >
                  Listar Géneros
                </Link>
              </li>
              <li>
                <Link
                  className="font-medium text-xl hover:text-[#39bc69] transition-colors"
                  to="/genero-create"
                >
                  Nuevo Género
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};
