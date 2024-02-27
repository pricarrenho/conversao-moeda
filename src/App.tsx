import { BrowserRouter } from "react-router-dom";
import { GlobalProvider } from "./context/GlobalContext";
import { Routes } from "./routes";
import "./style.css";

export function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </GlobalProvider>
  );
}
