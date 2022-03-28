import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { useSelector } from "react-redux";
import FeatherIcon from "feather-icons-react";

export default function Sidebar(props) {
  const { setIndex, isFilterOn, searchQuery } = props;

  const lists = useSelector((state) => state.data.lists);
  const listTileRef = useRef(null);

  const [todos, setTodos] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [filter, setFilter] = useState(isFilterOn);
  const [query, setQuery] = useState(searchQuery);

  useEffect(() => {
    setFilter(isFilterOn);
    setQuery(searchQuery);
  }, [isFilterOn, searchQuery]);

  useEffect(() => {
    if (query === "") return;
    let filteredResults = [];
    todos.forEach((element) => {
      if (element.title.toLowerCase().includes(query.toLowerCase()))
        return filteredResults.push(element);
      filteredResults.push({});
    });
    setFilteredList(filteredResults);
  }, [query, todos]);

  useEffect(() => {
    setTodos(lists);
  }, [lists, todos.items]);

  const checkCompletion = (items) => {
    let isComplete = true;
    items.forEach((element) => {
      if (element.isChecked === false) isComplete = false;
    });
    return isComplete;
  };

  const FilteredList = () =>
    (query ? filteredList : todos).map((list, index) =>
      list.items && list.items.length > 0 && checkCompletion(list.items) ? (
        <div
          key={index}
          ref={listTileRef}
          className={`min-h-min px-8 ${
            Object.keys(list).length === 0 ? "p-0" : "py-4"
          } hover:bg-teal-50/70 hover:cursor-pointer transition-colors duration-200 flex flex-row items-center`}
          onClick={() => setIndex(index)}
        >
          <span className="">{list.title}</span>
        </div>
      ) : (
        <></>
      )
    );
  const PlainList = () =>
    (query ? filteredList : todos).map((list, index) => {
      return (
        <div
          key={index}
          ref={listTileRef}
          className={`min-h-min px-8 ${
            Object.keys(list).length === 0 ? "p-0" : "py-4"
          } hover:bg-teal-50/70 hover:cursor-pointer transition-colors duration-200 flex flex-row items-center`}
          onClick={() => setIndex(index)}
        >
          <span className="">{list.title}</span>
          {list.items &&
          list.items.length > 0 &&
          checkCompletion(list.items) ? (
            <FeatherIcon icon="check" stroke="teal" className="ml-auto" />
          ) : (
            <></>
          )}
        </div>
      );
    });

  if (todos.length > 0 && todos)
    return filter ? <FilteredList /> : <PlainList />;

  return <></>;
}
