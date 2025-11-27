import React from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  return (
    <div className="h-screen bg-gray-950 text-white flex flex-col items-center justify-center">
      <h1 className="text-3xl mb-6 font-semibold text-purple-400">Login — DominusAI</h1>
      <button
        onClick={() => navigate("/dashboard")}
        className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-2xl text-lg"
      >
        Entrar no Sistema
      </button>
      <button
        onClick={() => navigate("/")}
        className="text-gray-400 mt-4 hover:text-gray-200"
      >
        ← Voltar
      </button>
    </div>
  );
}
