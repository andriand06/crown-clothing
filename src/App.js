import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Checkout from "./pages/Checkout";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Shop from "./pages/Shop";
import Signup from "./pages/Signup";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<LandingPage />} />
          <Route path="shop" element={<Shop />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
