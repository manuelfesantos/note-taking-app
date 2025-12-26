import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login.tsx";
import React from "react";
import { Signup } from "@/pages/Signup.tsx";
import { ForgotPassword } from "@/pages/ForgotPassword.tsx";
import { ResetPassword } from "@/pages/ResetPassword.tsx";
import { useThemeContext } from "@/contexts/ThemeContext.tsx";

export const App: React.FC = () => {
  const { theme } = useThemeContext();
  return (
    <main data-theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1>olá</h1>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
};
