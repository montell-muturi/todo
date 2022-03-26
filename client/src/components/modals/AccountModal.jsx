import React from "react";

export default function AccountModal(props) {
  let { visible } = props;

  return visible ? (
    <div className="relative self-end">
      <div className="absolute right-0 flex items-center px-8 py-3 rounded-2xl bg-gray-100 shadow-md space-x-4">
        <div className="h-12 w-12 rounded-full bg-slate-400">
          <img src="" alt="" />
        </div>
        <div className="flex flex-col space-y-0.5">
          <span className="text-lg font-medium">
            {"Username".toUpperCase()}
          </span>
          <span className="text-sm text-gray-500">email@domain.com</span>
          <span className="text-sm text-red-500 underline cursor-pointer">
            Delete Account
          </span>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
}
