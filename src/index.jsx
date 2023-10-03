// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { FlightSearchProvider } from "./features/flightSearch";
import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <FlightSearchProvider>
    <App />
  </FlightSearchProvider>
);
