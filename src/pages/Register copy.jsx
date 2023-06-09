import React from "react";
import "./Register.css";

import { useState } from "react";
import { register } from "../api/usersApi/user";
import { useDispatch } from "react-redux";
import { setLogin } from "./state";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
  });

  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();

    let res = await register(values);
    console.log(res);

    navigate("/login");
    // TODO: add login logic here
  };
  return (
    <>
      <div className="login">
        <div className="login">
          <form onSubmit={handleSubmit}>
            <div className="loginWrapper">
              <div className="loginLeft">
                <h2 className="loginLogo">Welcome to Gamers DEN</h2>
                <span className="loginDesc"></span>
              </div>
              <div className="loginRight">
                <div className="loginBox">
                  <label htmlFor="firstName">firstName:</label>
                  <input
                    className="loginInput"
                    type="text"
                    id="firstName"
                    value={values.firstName}
                    onChange={(event) =>
                      setValues({
                        ...values,
                        firstName: event.target.value,
                      })
                    }
                    required
                  />
                  <label htmlFor="secondName">lastName:</label>
                  <input
                    className="loginInput"
                    type="text"
                    id="lastName"
                    value={values.lastName}
                    onChange={(event) =>
                      setValues({
                        ...values,
                        lastName: event.target.value,
                      })
                    }
                    required
                  />
                  <label htmlFor="email">Email:</label>
                  <input
                    className="loginInput"
                    type="email"
                    id="email"
                    value={values.email}
                    onChange={(event) =>
                      setValues({ ...values, email: event.target.value })
                    }
                    required
                  />

                  <label htmlFor="email">phone no:</label>
                  <input
                    className="loginInput"
                    type="number"
                    id="phoneNumber"
                    value={values.phoneNumber}
                    onChange={(event) =>
                      setValues({ ...values, phoneNumber: event.target.value })
                    }
                    required
                  />

                  <label htmlFor="password">Password:</label>
                  <input
                    className="loginInput"
                    type="password"
                    id="password"
                    value={values.password}
                    onChange={(event) =>
                      setValues({ ...values, password: event.target.value })
                    }
                    required
                  />
                  <button className="loginButton" type="submit">
                    Register
                  </button>
                </div>
              </div>
            </div>
          </form>
          <div>
            <button className="loginButton">Log into Account</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
