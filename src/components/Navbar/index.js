import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { selectCurrentUser } from "../../store/user/user.selector";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import { ReactComponent as Logo } from "../../assets/images/crown.svg";
import Cart from "../Cart";
import CartDropdown from "../CartDropdown";
import { Nav, LogoWrapper, LinksWrapper, LinkWrapper } from "./Navbar.styles";
import "./Navbar.styles.scss";
import { selectIsCartOpen } from "../../store/cart/cart.selector";
const Navbar = () => {
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);
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
