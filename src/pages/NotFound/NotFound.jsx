import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

import "./NotFound.css";

function NotFound() {
  return (
    <main className="notfound-page">
      <h1>404</h1>

      <h2>Página não encontrada</h2>

      <p>
        O conteúdo que você tentou acessar não existe ou foi removido.
      </p>

      <Link to="/">
        <FaHome />
        Voltar para Home
      </Link>
    </main>
  );
}

export default NotFound;