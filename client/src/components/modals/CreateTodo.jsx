import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createList } from "../../redux/actions/listactions";

export default function CreateTodoModal(props) {
  const { toggleModal } = props;
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const lists = useSelector((state) => state.data.lists);

  const [title, setTitle] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createList(lists, auth.id, title));
    toggleModal(false);
  };

  return (
    <div className="absolute top-0 left-0 w-screen h-screen z-20 flex items-center justify-center">
      <div
        className="absolute top-0 left-0 w-screen h-screen bg-gray-600 bg-opacity-60"
        onClick={() => toggleModal(false)}
      />

      <form
        className="absolute z-30 flex items-center justify-center flex-col space-y-4"
        onSubmit={(e) => handleSubmit(e)}
      >
        <input
          type="text"
          className="text-4xl bg-slate-100 rounded-full px-12 py-6 hover:drop-shadow transition-shadow duration-300 border min-w-fit"
          placeholder="Give your list a name"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <button
          type="submit"
          className=" w-40 bg-teal-400 rounded-full p-3 shadow-md hover:-translate-y-1 transition-transform flex flex-col justify-center items-center"
        >
          <span className="font-semibold">CREATE</span>{" "}
          <span className="text-sm">(or hit enter)</span>
        </button>
      </form>
    </div>
  );
}
