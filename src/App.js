import "./App.css";

import Navbar from "./components/Navbar/Navbar";

import SignUp from "./components/SignUp/SignUp";
import { useState } from "react";
import Welcome from "./components/Welcome/Welcome";
import Menu from "./components/Menu/Menu";
export default function App() {
  const [values, setValues] = useState({
    username: "",
    fullname: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const inputs = [
    {
      id: 1,
      type: "text",
      name: "username",
      placeholder: "UserName",
      label: "UserName",
    },
    {
      id: 2,
      type: "text",
      name: "fullname",
      placeholder: "FullName",
      label: "FullName",
    },
    {
      id: 3,
      type: "text",
      name: "email",
      placeholder: "Email",
      label: "Email",
    },
    {
      id: 4,
      type: "password",
      name: "password",
      placeholder: "Password",
      label: "Password",
    },
    {
      id: 5,
      type: "password",
      name: "confirmpassword",
      placeholder: "Confirm Password",
      label: "Confirm Password",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  console.log(values);

  return (
    <>
    <Navbar />
      <div className="sign-up">
        <form onSubmit={handleSubmit}>
          {inputs.map((input) => {
            return (
              <>
                <SignUp
                  {...input}
                  key={input.id}
                  value={values[input.name]}
                  onChange={onChange}
                />
              </>
            );
          })}
          <button>Sign up</button>
        </form>
      </div>

      <Welcome />

      <Menu />
      
    </>
  );
}
