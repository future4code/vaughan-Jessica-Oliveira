import logo from "./logo.svg";
import "./App.css";
import { Messaging } from "./components/messages/messages";

function App() {
  return (
    <div>
      <Messaging />
      <button>Enviar</button>
    </div>
  );
}

export default App;
