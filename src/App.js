import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { useEffect } from "react";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";
import Orders from "./Orders";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51K9zb2DiGUFRrhJxwBQaDlAigRNZp8yWIjw2TbQal6xZz7UzAPECKIF3tEAx0RnRnvT35LMbqbICYMrPHDtLCSvY00ac8yhBik"
);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only ru once when the app componet loads..
    auth.onAuthStateChanged((authUser) => {
      console.log("Hello!, user>>>", authUser);

      if (authUser) {
        //the user just logged in or the user was logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out or the user was logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    // BEM
    // <Router>
    //   <div className="app">
    //     <Route path="/checkout">
    //       <Header />
    //       <Checkout />
    //     </Route>
    //     <Route path="/">
    //       <Header />
    //       <Home />
    //     </Route>
    //   </div>
    // </Router>

    <Router>
      <div className="app">
        <Switch>
          {/* <h1>I am going to do this for real💕✔👽👻</h1> */}
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
