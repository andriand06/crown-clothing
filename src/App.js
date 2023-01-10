import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
  getCategoriesAndDocuments,
} from "./utils/firebase/firebase.utils";
import { setCurrentUser } from "./store/user/user.action";
import { setCategories } from "./store/categories/categories.action";
// as the actual value you want to access
import Navbar from "./components/Navbar";
import Checkout from "./pages/Checkout";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Shop from "./pages/Shop";
import Signup from "./pages/Signup";
const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getCategory = async () => {
      const category = await getCategoriesAndDocuments();
      dispatch(setCategories(category));
    };
    getCategory();
    //when react unmount components
    // we will need to unsubscribe
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      dispatch(setCurrentUser(user));
    });
    return unsubscribe;
    // eslint-disable-next-line
  }, []);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<LandingPage />} />
          <Route path="shop/*" element={<Shop />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
