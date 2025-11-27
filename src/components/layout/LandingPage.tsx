import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-950 to-gray-900 text-white flex flex-col items-center justify-center px-8 overflow-x-hidden">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
        <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text text-center">
          DominusAI–OTTO
        </h1>
        <p className="text-lg text-gray-300 mb-8 text-center max-w-2xl">
          A plataforma cognitiva que redefine a inteligência industrial, unindo IA, autoevolução e arquitetura consciente.
        </p>
      </motion.div>

      <motion.div className="flex gap-4 mb-16" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
        <button
          className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-2xl text-lg"
          onClick={() => navigate("/login")}
        >
          Acessar Plataforma
        </button>
        <button
          className="border border-gray-600 text-gray-200 px-6 py-3 rounded-2xl text-lg hover:border-purple-500"
          onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })}
        >
          Ver Planos
        </button>
      </motion.div>

      <footer className="mt-16 text-gray-500 text-sm">
        © 2025 DominusAI — Todos os direitos reservados.
      </footer>
    </div>
  );
}
