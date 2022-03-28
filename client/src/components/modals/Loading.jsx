import React from "react";

export default function LoadingModal(props) {
  return (
    <div className="absolute top-0 left-0 w-screen h-screen bg-gray-400/60 flex items-center justify-center z-20">
      <div className="w-12 h-12  animate-spin rounded-full border-white border-t-teal-400 border-8 " />
    </div>
  );
}
