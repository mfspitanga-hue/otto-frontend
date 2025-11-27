import React from "react";
import Sidebar from "./SideBar";
import Header from "./Header";
import { motion } from "framer-motion";


export default function ProtectedLayout({ children }: { children: React.ReactNode }) {
return (
<div className="flex h-screen bg-black text-white overflow-hidden">
<Sidebar />
<div className="flex-1 flex flex-col">
<Header />
<motion.main
className="flex-1 overflow-y-auto p-6 bg-gradient-to-b from-gray-950 to-black"
initial={{ opacity: 0, y: 15 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.5 }}
>
{children}
</motion.main>
</div>
</div>
);
}
