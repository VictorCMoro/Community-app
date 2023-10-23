"use client";

import { useState } from "react";
import LabelInput from "../components/LabelInput";

export default function Home() {
  const [username, setUsername] = useState("");

  return (
    <div className="bg-stone-800  text-gray-200">
      <div className="flex justify-center items-center h-screen ">
        <form className="text-center bg-stone-900 w-80 rounded shadow-md">
          <LabelInput
            htmlFor="Username"
            id="Username"
            label="Username"
            placeholder="Insert your username"
            type="text"
          />
          <LabelInput
            htmlFor="email"
            id="email"
            label="Email"
            placeholder="Insert your Email"
            type="text"
          />
          <LabelInput
            htmlFor="password"
            id="password"
            label="Password"
            placeholder="Insert your password"
            type="password"
          />
          <LabelInput
            htmlFor="confirmPassword"
            id="confirmPassword"
            label="Confirm password"
            placeholder="Confirm password"
            type="password"
          />
          <div className="text-right">
            <button type="submit" className="bg-cyan-900 hover:bg-cyan-950 rounded mt-3 h-7 px-2 m-3 mb-3">
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
