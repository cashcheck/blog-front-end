import { BrowserRouter } from "react-router-dom";
import { Controller } from "./components/Controller";
import { ThemeProvider, CssBaseline } from "@mui/material/";
import { createTheme } from "@mui/material/styles";

const theme1 = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <ThemeProvider theme={theme1}>
      <CssBaseline />
      <BrowserRouter>
        <Controller />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
