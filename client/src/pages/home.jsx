import React, { useEffect, useState } from "react";
import FeatherIcon from "feather-icons-react";
import Sidebar from "../components/Sidebar";
import Appbar from "../components/Appbar";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CreateTodoModal from "../components/modals/CreateTodo";
import ItemList from "../components/ItemView";
import UtilityBar from "../components/UtilityBar";
import LoadingModal from "../components/modals/Loading";

export default function Home(props) {
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);
  const lists = useSelector((state) => state.data.lists);

  const [isModalOpen, toggleIsModalOpen] = useState(false);
  const [isFilterOn, toggleIsFilterOn] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedListIndex, setSelectedListIndex] = useState(null);

  useEffect(() => {
    if (auth.id === null) navigate("/login");
  }, [auth.id, navigate]);

  const toggleFilter = () => {
    toggleIsFilterOn(!isFilterOn);
  };

  return (
    <>
      <div className="h-screen flex flex-row w-full">
        <div className="relative h-screen overflow-y-scroll bg-teal-100 w-1/4 min-w-fit shadow-xl">
          <UtilityBar
            toggleFilter={toggleFilter}
            setSearch={setSearchQuery}
            isFilterOn={isFilterOn}
          />
          <Sidebar
            isFilterOn={isFilterOn}
            setIndex={setSelectedListIndex}
            searchQuery={searchQuery}
          />
          <button
            className="sticky mt-auto bottom-8 right-0 w-fit ml-auto mr-6 flex flex-row space-x-2  bg-teal-400 rounded-full p-3 shadow-md hover:-translate-y-0.5  transition-transform"
            onClick={(event) => {
              toggleIsModalOpen(true);
            }}
          >
            <FeatherIcon icon="plus" />
            <span className="font-semibold">Add Todo</span>
          </button>
        </div>

        <div className=" w-full self-stretch overflow-y-scroll">
          <Appbar
            listIndex={selectedListIndex}
            unsetIndex={setSelectedListIndex}
          />
          <ItemList listIndex={selectedListIndex} />
        </div>
      </div>

      {isModalOpen ? (
        <CreateTodoModal toggleModal={toggleIsModalOpen} />
      ) : (
        <></>
      )}

      {lists.isLoading ? <LoadingModal /> : <></>}
    </>
  );
}
