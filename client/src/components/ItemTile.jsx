import React, { useEffect, useRef, useState } from "react";
import FeatherIcon from "feather-icons-react";
import { useDispatch, useSelector } from "react-redux";
import { deleteListItem, updateListItem } from "../redux/actions/listactions";

export default function ItemTile(props) {
  const { listIndex, listId, itemIndex } = props;

  const lists = useSelector((state) => state.data.lists);
  const [state, setState] = useState({});
  const dispatch = useDispatch();
  const title = useRef("");
  const isChecked = useRef(null);

  useEffect(() => {
    if (listIndex != null && lists)
      setState({ ...lists[listIndex].items[itemIndex] });
  }, [lists, listIndex, itemIndex]);

  const handleUpdateItem = () => {
    dispatch(
      updateListItem(lists, listIndex, listId, state._id, {
        title: state.title,
        isChecked: isChecked.current.checked,
      })
    );
  };

  const handleDeleteItem = () => {
    dispatch(deleteListItem(lists, listIndex, listId, state._id));
  };

  const handleChangeTitle = () => {
    setState({ ...state, title: title.current.value });
  };

  const handleToggleCheckbox = () => {
    setState({ ...state, isChecked: !state.isChecked });
    handleUpdateItem();
  };

  return (
    <div className="flex flex-row items-center py-2 w-full">
      <input
        ref={isChecked}
        type="checkbox"
        checked={state.isChecked}
        onChange={handleToggleCheckbox}
      />

      <input
        ref={title}
        type="text"
        className="text-lg flex-grow mx-4 w-auto text-ellipsis focus:outline-none"
        value={state.title}
        onClick={() => title.current.focus()}
        onChange={handleChangeTitle}
        onBlur={handleUpdateItem}
      />
      <button
        className="p-2 rounded-full flex justify-center items-center hover:bg-gray-100 ml-auto"
        onClick={handleDeleteItem}
      >
        <FeatherIcon icon="x" stroke="lightgrey" />
      </button>
    </div>
  );
}
