import React, { useState } from "react";
import ResetModal from "../components/modals/ResetModal";

export default function Auth(props) {
  const [isLogin, setIsLogin] = useState(true);
  const [visibility, setVisibility] = useState(false);

  const LoginForm = () => {
    return (
      <div className="p-16">
        <div className="flex flex-col space-y-4 max-w-sm">
          <h1 className="text-4xl font-black">Login</h1>
          <input
            className="bg-slate-100 rounded-xl px-4 py-2 hover:drop-shadow-md transition-shadow duration-300 border min-w-fit"
            type="text"
            placeholder="Username/Email"
            required
          />
          <input
            className="bg-slate-100 rounded-xl px-4 py-2 hover:drop-shadow-md transition-shadow duration-300 border min-w-fit"
            type="password"
            placeholder="Password"
            required
          />
          <button className="bg-teal-300 rounded-xl max-h-fit min-w-max px-4 py-2 font-semibold  hover:bg-teal-400 hover:-translate-y-0.5 hover:drop-shadow-md transition-transform">
            LOG IN
          </button>
          <span className="text-sm">
            New? Signup{" "}
            <span
              className="text-teal-500 hover:underline cursor-pointer"
              onClick={() => setIsLogin(!isLogin)}
            >
              here
            </span>
          </span>
          <span
            className="text-sm text-teal-500 hover:underline cursor-pointer"
            onClick={() => setVisibility(true)}
          >
            Forgot password?
          </span>
        </div>
      </div>
    );
  };

  const SignupForm = () => {
    return (
      <div className="p-16">
        <div className="flex flex-col space-y-4 max-w-sm">
          <h1 className="text-4xl font-black">Register</h1>
          <input
            className="bg-slate-100 rounded-xl px-4 py-2 hover:drop-shadow-md transition-shadow duration-300 border min-w-fit"
            type="text"
            placeholder="Username"
            required
          />
          <input
            className="bg-slate-100 rounded-xl px-4 py-2 hover:drop-shadow-md transition-shadow duration-300 border min-w-fit"
            type="email"
            placeholder="Email"
            required
          />
          <input
            className="bg-slate-100 rounded-xl px-4 py-2 hover:drop-shadow-md transition-shadow duration-300 border min-w-fit"
            type="password"
            placeholder="Password"
            required
          />
          <input
            className="bg-slate-100 rounded-xl px-4 py-2 hover:drop-shadow-md transition-shadow duration-300 border min-w-fit"
            type="password"
            placeholder="Repeat Password"
            required
          />
          <button className="bg-teal-300 rounded-xl max-h-fit min-w-max px-4 py-2 font-semibold  hover:bg-teal-400 hover:-translate-y-0.5 hover:drop-shadow-md transition-transform">
            SIGN UP
          </button>
          <span className="text-sm">
            Have an account? Login{" "}
            <span
              className="text-teal-500 hover:underline cursor-pointer"
              onClick={() => setIsLogin(!isLogin)}
            >
              here
            </span>
          </span>
        </div>
      </div>
    );
  };

  return (
    <>
      <div>{isLogin ? <LoginForm /> : <SignupForm />}</div>
      <ResetModal visible={visibility} setVisibility={setVisibility} />
    </>
  );
}
