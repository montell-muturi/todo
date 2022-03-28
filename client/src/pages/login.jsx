import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import LoadingModal from "../components/modals/Loading";
import { login } from "../redux/actions/authactions";
import { fetchLists } from "../redux/actions/listactions";

export default function Login(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);

  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const onHandleSubmit = (event) => {
    event.preventDefault();
    dispatch(login(state.email, state.password));
  };

  useEffect(() => {
    if (auth.email && auth.id) {
      dispatch(fetchLists(auth.id));
      navigate("/");
    }
  }, [auth.email, auth.id, dispatch, navigate]);

  return (
    <>
      <div className="p-16">
        <form
          className="flex flex-col space-y-4 max-w-sm"
          onSubmit={onHandleSubmit}
        >
          <h1 className="text-4xl font-black">Login</h1>
          <input
            className="bg-slate-100 rounded-xl px-4 py-2 hover:drop-shadow-md transition-shadow duration-300 border min-w-fit"
            type="email"
            placeholder="Email"
            required
            autoComplete="on"
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
          <span className="text-red-500 text-xs">{auth.error || ""}</span>
          <button
            type="submit"
            className="bg-teal-300 rounded-xl max-h-fit min-w-max px-4 py-2 font-semibold  hover:bg-teal-400 hover:-translate-y-0.5 hover:drop-shadow-md transition-transform"
          >
            LOG IN
          </button>
          <span className="text-sm">
            New? Signup{" "}
            <span className="text-teal-500 hover:underline cursor-pointer">
              <Link to="/signup"> here</Link>
            </span>
          </span>
        </form>
      </div>
      {auth.isLoading ? <LoadingModal /> : <></>}
    </>
  );
}
