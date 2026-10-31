import { Route, Routes } from "react-router";
import NavBar from "./components/NavBar/NavBar";
import Homepage from "./pages/ProductDetails/Homepage";
import ProductsList from "./pages/ProductList/ProductList";
import CreateProduct from "./pages/CreateProduct/CreateProduct";
import ProductsDetails from "./pages/ProductDetails/ProductDetails";

function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/products" element={<ProductsList />} />
        <Route path="/new-product" element={<CreateProduct />} />
        <Route path="/products/:productId" element={<ProductsDetails />} />
      </Routes>
    </>
  );
}

export default App;