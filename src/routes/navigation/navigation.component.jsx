import { Outlet, Link } from "react-router-dom";

import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropDown from "../../components/cart-icon/cart-dropdown/cart-dropdown.component";
import { UserContext } from "../../contexts/user.context";

import { useContext } from "react";

import { signOutUser } from "../../utils/firebase/firebase.utils";

import "../navigation/navigation.styles.scss";
import { DropDownContext } from "../../contexts/dropdown.context";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isOpen } = useContext(DropDownContext);

  const singOutHandler = async () => {
    await signOutUser();
  };

  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={singOutHandler}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}

          <CartIcon />
        </div>

        {isOpen && <CartDropDown />}
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
