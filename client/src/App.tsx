import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Men from "./pages/Men";
import Layout from "./pages/Layout";
import Women from "./pages/Women";
import Apothecary from "./pages/Apothecary";
import ProductView from "./pages/ProductView";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="*" element={<Home />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/apothecary" element={<Apothecary />} />
        <Route path="/details/:productId" element={<ProductView />} />
      </Route>
    </Routes>
  );
}

export default App;
