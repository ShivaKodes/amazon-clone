import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  function handleChange(event) {
    event.preventDefault();
    const { name, value, type } = event.target;
    type === "email" ? setEmail(value) : setPassword(value);

    console.log("email", email, "password", password);
  }
  //login the user
  function handleLogin(event) {
    event.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        console.log(auth);
        if (auth) {
          navigate("/");
        }
      })
      .catch((error) => alert(error.message));
  }

  //regiter the user
  function handleRegister(event) {
    event.preventDefault();
    //create the user
    createUserWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        console.log(auth);
        if (auth) {
          navigate("/");
        }
      })
      .catch((error) => alert(error.message));
  }

  return (
    <div className="w-full h-screen flex flex-col items-center bg-white">
      <Link to="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
          alt="amazon logo"
          className="w-[100px] object-contain my-5 mx-auto"
        />
      </Link>
      <form
        action=""
        className="flex flex-col items-start justify-center border-2 border-gray-400 w-[300px] h-fit rounded-md p-5 text-base font-semibold"
      >
        <h1 className="text-xl font-bold mb-2">Sign In</h1>
        <label htmlFor="email">Username</label>
        <input
          type="email"
          name="email"
          id="email"
          className="h-7 mb-2 bg-white border-2 w-[98%] rounded-md px-2 border-black"
          onChange={handleChange}
          value={email}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="passwod"
          id="password"
          className="h-7 mb-2 bg-white border-2 w-[98%] rounded-md px-2 border-black"
          onChange={handleChange}
          value={password}
        />
        <button
          type="submit"
          className="bg-[#f0c14b] rounded-sm w-full h-7 border border-[#a88734_#9c7e31_#846a29] text-[#111]mt-2"
          onClick={handleLogin}
        >
          Login
        </button>
        <p className="mt-4 text-xs">Sign in TnC</p>
        <button
          className="rounded-sm w-full h-7 border mt-2 border-gray-500 bg-gray-200"
          onClick={handleRegister}
        >
          Create your amazon account
        </button>
      </form>
    </div>
  );
}
