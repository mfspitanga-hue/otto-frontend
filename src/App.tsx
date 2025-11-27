import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./components/layout/ProtectedLayout";  // se o nome do arquivo estiver assim
import Login from "./components/layout/ProtectedLayout";
import Dashboard from "./components/layout/ProtectedLayout";
import ProtectedLayout from "./components/layout/ProtectedLayout";


export default function App() {
const isAuthenticated = true;


return (
<Router>
<Routes>
<Route path="/" element={<LandingPage />} />
<Route path="/login" element={<Login />} />
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