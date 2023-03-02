import { useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import Checkout from "./components/Checkout";
import Login from "./components/Login";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { useStateValue } from "./components/StateProvider";

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        //user logged in/was logged in
        console.log("user is", user);
        dispatch({
          type: "SET_USER",
          user: user,
        });
      } else {
        //user logged out

        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="App">
            <Header />
            <Home />
          </div>
        }
      />
      <Route
        path="checkout"
        element={
          <div>
            <Header />
            <Checkout />
          </div>
        }
      />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
