import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import ProtectedLayout from "./components/layout/ProtectedLayout";
import LandingPage from "./components/layout/LandingPage";
import Login from "./components/layout/Login";
import Dashboard from "./components/layout/Dashboard";

export default function App() {
  const isAuthenticated = true; // futuramente conectado ao store (Zustand/Auth)

  return (
    <Router>
      <Routes>
        {/* Página pública inicial */}
        <Route path="/" element={<LandingPage />} />

        {/* Página de login */}
        <Route path="/login" element={<Login />} />

        {/* Área protegida */}
        <Route
          path="/dashboard"
          element={
            isAuthenticated ? (
              <ProtectedLayout>
                <Dashboard />
              </ProtectedLayout>
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
      </Routes>
    </Router>
  );
}
