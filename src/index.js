import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "./Assets/Fonts/Lato-Italic.ttf";
import "./Assets/Fonts/Lato-LightItalic.ttf";
import "./Assets/Fonts/Montserrat-Medium.ttf";
import { StyledEngineProvider } from '@mui/material/styles';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <App />
    </StyledEngineProvider>
  </React.StrictMode>
);
