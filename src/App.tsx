import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./components/layout/LandingPage";
import Login from "./components/layout/Login";
import Dashboard from "./components/layout/Dashboard";
import ProtectedLayout from "./components/layout/ProtectedLayout";

export default function App() {
  const isAuthenticated = true; // depois integramos com autenticação real (Supabase ou API OTTO)

  return (
    <Router>
      <Routes>
        {/* Página pública inicial */}
        <Route path="/" element={<LandingPage />} />

        {/* Tela de login */}
        <Route path="/login" element={<Login />} />

        {/* Área protegida do sistema */}
        <Route
          path="/dashboard"
          element={
            isAuthenticated ? (
              <ProtectedLayout>
                <Dashboard />
              </ProtectedLayout>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
      </Routes>
    </Router>
  );
}
