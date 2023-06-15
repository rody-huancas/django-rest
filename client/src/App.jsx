import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { GeneroFormPage } from "./pages/GeneroFormPage";
import { GeneroPage } from "./pages/GeneroPage";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/genero" />} />
          <Route path="/genero" element={<GeneroPage />} />
          <Route path="/genero-create" element={<GeneroFormPage />} />
          <Route path="/genero/:id" element={<GeneroFormPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
