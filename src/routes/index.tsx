import { Navigate, Route, Routes } from "react-router-dom";
import Cart from "../pages/Cart";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Product from "../pages/Product";
import ProductList from "../pages/ProductList";

export const AppRoutes = () => {

  return (
    <Routes>
      {/*ROTAS DE CLIENTE */}
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/product" element={<Product />} />
      <Route path="/product-list" element={<ProductList />} />

      {/*ROTAS DE PARCEIRO */}
      <Route path="/admin/add-product" element={<Product />} />
      <Route path="/admin/product-list" element={<Product />} />

      <Route path="*" element={<Navigate to="/home" />} />
    </Routes>
  );
}