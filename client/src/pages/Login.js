import React, { useState } from "react";
import { Link } from "react-router-dom";
import Auth from "../utils/auth";
import { loginUser } from "../utils/api";
const Login = () => {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, setLogin] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    const res = await loginUser(formState);
    setLogin(true)

    if (!res.ok) {
      throw new Error("something went wrong!");
    }

    const { token, user } = await res.json();
    console.log(token);
    Auth.login(token);

    // clear form values
    setFormState({
      email: "",
      password: "",
    });
  };

  return (
    <main className="flex-row justify-center mb-4">
      <div className="col-12 col-lg-10">
        <div className="card">
          <h4 className="card-header bg-dark text-light p-2">Login</h4>
          <div className="card-body">
            {login ? (
              <p>
                Success! You may now head{" "}
                <Link to="/">back to the homepage.</Link>
              </p>
            ) : (
              <form onSubmit={handleFormSubmit}>
                <p>
                  Not having account?{" "}
                  <Link className="text-light" to="Signup">
                    SignUp
                  </Link>
                </p>
                <input
                  className="form-input"
                  placeholder="Your email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                />
                <input
                  className="form-input"
                  placeholder="******"
                  name="password"
                  type="password"
                  value={formState.password}
                  onChange={handleChange}
                />
                <button
                  className="btn btn-block btn-info"
                  style={{ cursor: "pointer" }}
                  type="submit"
                >
                  Submit
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
