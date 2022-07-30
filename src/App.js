import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import ProfInfoPage from "./pages/ProfInfoPage";
import RestaurantPage from "./pages/RestaurantPage";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<HomePage />} />
        <Route path="/professors" element={<ProfInfoPage />} />
        <Route path="/restaurant" element={<RestaurantPage />} />
      </Route>
    </Routes>
    
  );
}

export default App;