import { Outlet, Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/images/crown.svg";
import "./Navbar.styles.scss";
const Navbar = () => {
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
          <Link className="nav-link" to="/login">
            Sign in
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};
export default Navbar;
