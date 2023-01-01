import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import { ReactComponent as Logo } from "../../assets/images/crown.svg";
import Cart from "../Cart";
import CartDropdown from "../CartDropdown";
import { Nav, LogoWrapper, LinksWrapper, LinkWrapper } from "./Navbar.styles";
import "./Navbar.styles.scss";
const Navbar = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);
  const signOutHandler = async () => {
    await signOutUser();
  };

  return (
    <>
      <Nav>
        <LogoWrapper to="/">
          <Logo />
        </LogoWrapper>
        <LinksWrapper>
          <LinkWrapper href="/shop">Shop</LinkWrapper>
          <LinkWrapper href="/contact">Contact</LinkWrapper>
          {currentUser ? (
            <LinkWrapper href="/" onClick={signOutHandler}>
              Sign Out
            </LinkWrapper>
          ) : (
            <LinkWrapper href="/login">Sign in</LinkWrapper>
          )}
          <Cart />
        </LinksWrapper>
        {isCartOpen && <CartDropdown />}
      </Nav>
      <Outlet />
    </>
  );
};
export default Navbar;
