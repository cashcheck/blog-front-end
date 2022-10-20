import { BrowserRouter } from "react-router-dom";
import { Controller } from "./components/Controller";
import "./app.css";

function App() {
  return (
    <BrowserRouter>
      <Controller />
    </BrowserRouter>
  );
}

export default App;
