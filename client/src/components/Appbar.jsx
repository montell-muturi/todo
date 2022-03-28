import React, { useState } from "react";
import FeatherIcon from "feather-icons-react";
import AccountModal from "./modals/AccountModal";
import { deleteList, updateList } from "../redux/actions/listactions";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";

export default function Appbar(props) {
  const { listIndex, unsetIndex } = props;

  const dispatch = useDispatch();
  const lists = useSelector((state) => state.data.lists);

  const [showAccount, setShowAccount] = useState(false);
  const [currentList, setCurrentList] = useState({
    title: "No list selected",
  });

  useEffect(() => {
    if (listIndex != null) setCurrentList({ ...lists[listIndex] });
  }, [listIndex, lists]);

  const handleDeleteList = () => {
    dispatch(deleteList(lists, currentList._id, listIndex));
    setCurrentList({ title: "No list selected" });
    unsetIndex(null);
  };

  const handleChangeTitle = () => {
    dispatch(updateList(lists, listIndex, currentList._id, currentList.title));
  };

  return (
    <div className="px-24 py-3 flex flex-row items-center sticky top-0 bg-white z-10 shadow">
      <input
        className="text-3xl  w-fit font-bold text-ellipsis focus:outline-none"
        value={currentList.title}
        onChange={(e) =>
          setCurrentList({ ...currentList, title: e.target.value })
        }
        onBlur={handleChangeTitle}
      />
      <button
        className="p-2 rounded-full flex justify-center items-center hover:bg-teal-100 ml-auto"
        onClick={handleDeleteList}
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
  );
}
