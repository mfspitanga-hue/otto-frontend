import React, { useState } from "react";
import { motion } from "framer-motion";
import { Home, Cpu, BarChart2, Settings } from "lucide-react";
import { useNavigate } from "react-router-dom";


export default function Sidebar() {
const [open, setOpen] = useState(true);
const navigate = useNavigate();


const menu = [
{ name: "Dashboard", icon: <Home size={20} />, route: "/dashboard" },
{ name: "IA Operacional", icon: <Cpu size={20} />, route: "/ia" },
{ name: "Relatórios", icon: <BarChart2 size={20} />, route: "/reports" },
{ name: "Configurações", icon: <Settings size={20} />, route: "/settings" },
];


return (
<motion.aside
animate={{ width: open ? 220 : 72 }}
className="bg-gray-950 h-full flex flex-col border-r border-gray-800"
>
<div className="flex items-center justify-between px-4 py-5 border-b border-gray-800">
<span className="text-purple-400 font-bold text-lg">
{open ? "DominusAI" : "DA"}
</span>
<button
onClick={() => setOpen(!open)}
className="text-gray-400 hover:text-purple-400"
>
{open ? "⟨" : "⟩"}
</button>
</div>
<nav className="flex-1 p-3 space-y-2">
{menu.map((item) => (
<button
key={item.name}
onClick={() => navigate(item.route)}
className="flex items-center gap-3 w-full px-3 py-2 rounded-xl text-gray-300 hover:bg-gray-800 hover:text-white transition-all"
>
{item.icon}
{open && <span>{item.name}</span>}
</button>
))}
</nav>
<div className="text-xs text-gray-600 text-center pb-4">v1.0.0</div>
</motion.aside>
);
}