import React from "react";
import FeatherIcon from "feather-icons-react";

export default function ResetModal(props) {
  let { visible, setVisibility } = props;

  return visible ? (
    <div className="absolute top-0 left-0 right-0 bottom-0 bg-slate-500/80 flex flex-col h-full justify-center items-center ">
      <div className="relative flex flex-col space-y-4 bg-slate-50 px-24 py-16 rounded-3xl">
        <h1 className="text-2xl font-medium">Reset Your Password</h1>
        <input
          className="bg-slate-100 rounded-xl px-4 py-2 hover:drop-shadow-md transition-shadow duration-300 border min-w-fit"
          placeholder="Email"
          type="email"
        />
        <button className="bg-teal-300 rounded-xl max-h-fit min-w-max px-4 py-2 font-semibold  hover:bg-teal-400 hover:-translate-y-0.5 hover:drop-shadow-md transition-transform">
          RESET
        </button>
        <div
          className="absolute top-2 right-9 rounded-full bg-slate-200 text-gray-900 font-black flex items-center justify-center cursor-default"
          onClick={() => setVisibility(false)}
        >
          <FeatherIcon icon="close" fill="black" />
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
}
