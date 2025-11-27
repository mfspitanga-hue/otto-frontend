import React from "react";
import { motion } from "framer-motion";


export default function Header() {
return (
<motion.header
className="flex items-center justify-between px-6 py-4 border-b border-gray-800 bg-gray-950/80 backdrop-blur-md"
initial={{ opacity: 0, y: -10 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.5 }}
>
<h1 className="text-xl font-semibold text-purple-400">
Painel DominusAI–OTTO
</h1>
<div className="text-gray-400 text-sm">
🌐 Cognitive Core: <span className="text-blue-400">Online</span>
</div>
</motion.header>
);
}