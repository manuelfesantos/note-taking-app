import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App.tsx";
import { UserContextProvider } from "@/contexts/UserContext.tsx";
import "@/styles.css";
import { ThemeContextProvider } from "@/contexts/ThemeContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <UserContextProvider>
      <ThemeContextProvider>
        <App />
      </ThemeContextProvider>
    </UserContextProvider>
  </StrictMode>,
);
