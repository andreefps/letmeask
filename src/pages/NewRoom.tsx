import { Link } from "react-router-dom";
import IllustrationImg from "../assets/images/illustration.svg";
import logoImg from "../assets/images/logo.svg";

import "../styles/auth.scss";
import { Button } from "../components/Button";

export function NewRoom() {
  //const { user } = useAuth();

  return (
    <div id="page-auth">
      <aside>
        <img src={IllustrationImg} alt="ilustracao" />
        <strong>Crie salas de Q&amp;A ao-vivo</strong>
        <p>Tire duvidas em tempo real</p>
      </aside>
      <main>
        <div className="main-content">
          <img src={logoImg} alt="letMeAsk" />
          <h2>Criar uma nova sala</h2>
          <form action="">
            <input type="text" placeholder="Nome da sala" />
            <Button type="submit">Criar Sala</Button>
          </form>
          <p>
            Quer Entrar em uma sala existente ? <Link to="/">clique aqui</Link>{" "}
          </p>
        </div>
      </main>
    </div>
  );
}
