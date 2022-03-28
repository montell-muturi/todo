import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import LoadingModal from "../components/modals/Loading";
import { signup } from "../redux/actions/authactions";

export default function SignUp(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);

  const [state, setState] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState(null);

  const onHandleSubmit = (event) => {
    event.preventDefault();
    dispatch(signup(state.username, state.email, state.password));
  };

  const checkPasswordMatch = (value) => {
    if (value === "" || value == null) return setError(null);
    if (value !== state.password) return setError("Password does not match!");
    setError("");
  };

  useEffect(() => {
    if (auth.email && auth.id) navigate("/");
  }, [auth.email, auth.id, navigate]);

  return (
    <>
      <div className="p-16">
        <form
          className="flex flex-col space-y-4 max-w-sm"
          onSubmit={onHandleSubmit}
        >
          <h1 className="text-4xl font-black">Register</h1>
          <input
            className="bg-slate-100 rounded-xl px-4 py-2 hover:drop-shadow-md transition-shadow duration-300 border min-w-fit"
            type="text"
            placeholder="Username"
            required
            value={state.username}
            onChange={(event) =>
              setState({ ...state, username: event.target.value.trim() })
            }
          />
          <input
            className="bg-slate-100 rounded-xl px-4 py-2 hover:drop-shadow-md transition-shadow duration-300 border min-w-fit"
            type="email"
            placeholder="Email"
            required
            value={state.email}
            onChange={(event) =>
              setState({ ...state, email: event.target.value })
            }
          />
          <input
            className="bg-slate-100 rounded-xl px-4 py-2 hover:drop-shadow-md transition-shadow duration-300 border min-w-fit"
            type="password"
            placeholder="Password"
            required
            value={state.password}
            onChange={(event) =>
              setState({ ...state, password: event.target.value })
            }
          />
          <input
            className={`bg-slate-100 rounded-xl px-4 py-2 hover:drop-shadow-md transition-shadow duration-300 border min-w-fit ${
              error !== "" ? "outline-2 outline-red-500" : ""
            }`}
            type="password"
            placeholder="Repeat Password"
            required
            onChange={(event) => checkPasswordMatch(event.target.value)}
          />
          {error ? (
            <span className="text-red-500 text-xs">{error}</span>
          ) : (
            <></>
          )}
          {auth.error ? (
            <span className="text-red-500 text-xs">{auth.error}</span>
          ) : (
            <></>
          )}
          <button
            className="bg-teal-300 rounded-xl max-h-fit min-w-max px-4 py-2 font-semibold  hover:bg-teal-400 hover:-translate-y-0.5 hover:drop-shadow-md transition-transform"
            type="submit"
          >
            SIGN UP
          </button>
          <span className="text-sm">
            Have an account? Login{" "}
            <span className="text-teal-500 hover:underline cursor-pointer">
              <Link to="/login">here</Link>
            </span>
          </span>
        </form>
      </div>
      {auth.isLoading ? <LoadingModal /> : <></>}
    </>
  );
}
