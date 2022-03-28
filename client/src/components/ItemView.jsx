import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemTile from "./ItemTile";
import FeatherIcon from "feather-icons-react";
import { createListItem } from "../redux/actions/listactions";

export default function ItemList(props) {
  const { listIndex } = props;

  const dispatch = useDispatch();
  const lists = useSelector((state) => state.data.lists);

  const [currentList, setCurrentList] = useState({});

  useEffect(() => {
    if (listIndex != null) setCurrentList({ ...lists[listIndex] });
  }, [listIndex, lists]);

  const handleAddItem = () => {
    dispatch(
      createListItem(
        lists,
        listIndex,
        lists[listIndex]._id,
        "Tap to edit title"
      )
    );
  };

  return (
    <div className=" px-24 py-4 space-y-2">
      {currentList && currentList.items && listIndex != null ? (
        <>
          {currentList.items.map((element, index) => (
            <ItemTile
              key={index}
              listIndex={listIndex}
              listId={currentList._id}
              itemIndex={index}
            />
          ))}
          <div
            className="bg-gray-100 rounded-lg flex items-center justify-center py-4 hover:-translate-y-0.5 hover:cursor-pointer hover:shadow-md hover:shadow-gray-400/20 transition-all"
            onClick={handleAddItem}
          >
            <FeatherIcon icon="plus" stroke="rgb(107 114 128)" />
            <span className="text-gray-500">Tap to add item</span>
          </div>
        </>
      ) : (
        <div className="w-full h-32 text-2xl flex items-center justify-center mb- text-gray-300 text-center">
          Select a list from the sidebar or create one
        </div>
      )}
    </div>
  );
}
