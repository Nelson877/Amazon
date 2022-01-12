import React from "react";
import "./Header.css";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
// import PersonIcon from "@mui/icons-material/Person";
import { auth } from "./firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          // src="https://lh3.googleusercontent.com/proxy/pS5YaVl_piz-BCTRaxQGyIuVgbBdrFnOZsXbR9mZbsqIiX0W18Hza3jht9PcBU_Vja59NemZwTrOlzu9MKTdl71x5nrRlVIxSt4Y2YDJ1ReknT1VDHgtXr-Gb89RbG7XW28OOjDOjA"
          src="https://iconape.com/wp-content/png_logo_vector/amber-electrical-logo.png"
          alt="company lgo"
        />
      </Link>

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <Link to={!user && "/login"}>
          <div onClick={handleAuthentication} className="header__option">
            <span className="header__optionLineOne">
              Hello {!user ? "Guest" : user.email}
            </span>
            <span className="header__optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <Link to="/orders">
          <div className="header__option">
            {/*<PersonIcon />*/}
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            {/* <ShoppingCartIcon />*/}
            <span className="header__optionLineTwo  header__basketCount">
              {basket.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
