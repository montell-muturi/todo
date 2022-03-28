import React from "react";
import FeatherIcon from "feather-icons-react";
import { useState } from "react";

export default function UtilityBar(props) {
  const { isFilterOn, toggleFilter, setSearch } = props;

  return (
    <div className="flex flex-row items-center sticky top-0 px-4 py-3 space-x-2 shadow bg-teal-200">
      <input
        className=" rounded-full px-4 py-2 hover:drop-shadow-sm transition-shadow duration-300  min-w-fit"
        type="text"
        placeholder="Search..."
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        className={`p-2 rounded-full flex flex-col justify-center items-center hover:bg-teal-50 ${
          isFilterOn ? "bg-teal-500" : ""
        }`}
        onClick={toggleFilter}
      >
        <FeatherIcon icon="filter" stroke={isFilterOn ? "white" : "teal"} />
      </button>
    </div>
  );
}
