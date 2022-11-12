import { useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import { ReactComponent as Logo } from "../../assets/images/crown.svg";
import Cart from "../Cart";
import CartDropdown from "../CartDropdown";
import "./Navbar.styles.scss";
const Navbar = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);
  const signOutHandler = async () => {
    await signOutUser();
  };

  return (
    <>
      <div className="nav">
        <Link className="logo" to="/">
          <Logo />
        </Link>
        <div className="links">
          <Link className="nav-link" to="/shop">
            Shop
          </Link>
          <Link className="nav-link" to="/contact">
            Contact
          </Link>
          {currentUser ? (
            <a className="nav-link" onClick={signOutHandler} href="/">
              Sign Out
            </a>
          ) : (
            <Link className="nav-link" to="/login">
              Sign in
            </Link>
          )}
          <Cart />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </>
  );
};
export default Navbar;
