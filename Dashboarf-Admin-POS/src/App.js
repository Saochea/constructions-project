import Home from "./pages/Home";
import PrivateRoutes from "./utils/PrivateRoutes";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import Category from "./components/category/Category";
import Sale from "./components/sale/Sale";

function App() {
  return (
    <Routes>
      <Route element={<PrivateRoutes />}>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/category" element={<Category />} />
        <Route exact path="/sale" element={<Sale />} />
      </Route>
    </Routes>
  );
}

export default App;
