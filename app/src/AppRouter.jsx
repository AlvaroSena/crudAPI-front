import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Logs } from "./pages/Logs";
import { Product } from "./pages/Product";

export function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/logs" element={<Logs />} />
            <Route path="/:id" element={<Product />} />
        </Routes>
    )
}