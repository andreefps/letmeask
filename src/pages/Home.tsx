import { useNavigate } from "react-router-dom";
import IllustrationImg from "../assets/images/illustration.svg";
import logoImg from "../assets/images/logo.svg";
import googleIconImg from "../assets/images/google-icon.svg";
import "../styles/auth.scss";
import { Button } from "../components/Button";
import { NewRoom } from "./NewRoom";
import {
  auth,
  googleProvider,
  signInWithPopup,
  githubProvider,
} from "../services/firebase";

export function Home() {
  const navigate = useNavigate();

  function handleRoomCreation() {
    signInWithPopup(auth, googleProvider).then((result) => {
      console.log(result);
    });
    //navigate("rooms/new");
  }

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
          <button className="create-room" onClick={() => handleRoomCreation()}>
            <img src={googleIconImg} alt="google" /> Cria sua sala com o Google
          </button>
          <div className="separator">Ou entre em uma Sala</div>
          <form action="">
            <input type="text" placeholder="digite o codigo da sala" />
            <Button type="submit"> Entrar na sala</Button>
          </form>
        </div>
      </main>
    </div>
  );
}
