import React, { useState } from "react";
import FeatherIcon from "feather-icons-react";
import AccountModal from "../components/modals/AccountModal";

export default function Home(props) {
  const [showAccount, setShowAccount] = useState(false);

  return (
    <div className="h-screen flex flex-row w-full">
      <div className="relative overflow-y-scroll bg-teal-100 w-1/4 min-w-fit shadow-xl h-full">
        <div className="flex flex-row items-center sticky top-0 px-4 py-3 space-x-2 shadow bg-teal-200">
          <input
            className=" rounded-full px-4 py-2 hover:drop-shadow-sm transition-shadow duration-300  min-w-fit"
            type="text"
            placeholder="Search..."
            onChange={(e) =>
              console.log("Searching for '" + e.currentTarget.value + "'")
            }
          />
          <button
            className="p-2 rounded-full flex justify-center items-center hover:bg-teal-50"
            onClick={() => console.log("filtering...")}
          >
            <FeatherIcon icon="filter" stroke="teal" />
          </button>
        </div>
        {Array.from(Array(20)).map((element, index) => (
          <div
            key={index}
            className="min-h-min px-8 py-4 hover:bg-teal-50/70 transition-colors duration-200"
          >
            <span>Item {index}</span>
          </div>
        ))}
        <button
          className="sticky bottom-4 w-fit ml-auto mr-4 flex flex-row space-x-2  bg-teal-400 rounded-full p-3 shadow-md hover:-translate-y-1 transition-transform"
          onClick={() => console.log("adding...")}
        >
          <FeatherIcon icon="plus" />
          <span>Add To-do</span>
        </button>
      </div>
      <div className=" w-full self-stretch overflow-y-scroll">
        <div className="px-24 py-3 flex flex-row items-center sticky top-0 bg-white z-10 shadow">
          <h1 className="text-4xl font-bold">Title</h1>

          <button
            className="p-2 rounded-full flex justify-center items-center hover:bg-teal-100 ml-auto"
            onClick={() => console.log("reminding...")}
          >
            <FeatherIcon icon="bell" stroke="teal" />
          </button>
          <button
            className="p-2 rounded-full flex justify-center items-center hover:bg-teal-100 ml-4"
            onClick={() => console.log("deleting...")}
          >
            <FeatherIcon icon="trash" stroke="teal" />
          </button>
          <button
            className="p-2 rounded-full flex justify-center items-center hover:bg-teal-100 ml-4"
            onClick={() => setShowAccount(!showAccount)}
          >
            <FeatherIcon icon={showAccount ? "x" : "user"} stroke="teal" />
          </button>
          <AccountModal visible={showAccount} />
        </div>
        <div className=" px-24 py-4">
          {Array.from(Array(15)).map((element, index) => (
            <div key={index} className="flex flex-row items-center py-2 w-full">
              <input
                type="checkbox"
                name=""
                id=""
                value="checked"
                onChange={(e) =>
                  console.log(" Task " + index + " is " + e.currentTarget.value)
                }
              />
              <span className="text-lg mx-4 min-w-max">Task {index}</span>
              <button
                className="p-2 rounded-full flex justify-center items-center hover:bg-gray-100 ml-auto"
                onClick={() => console.log("deleting...")}
              >
                <FeatherIcon icon="x" stroke="lightgrey" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
