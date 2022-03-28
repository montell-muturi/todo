import React, { useEffect, useState } from "react";
import FeatherIcon from "feather-icons-react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteUser, logout } from "../../redux/actions/authactions";

export default function AccountModal(props) {
  let { visible } = props;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const [userData, setUserData] = useState({
    username: "",
    email: "",
  });

  useEffect(() => {
    setUserData({
      username: auth.username,
      email: auth.email,
    });
  }, [auth]);

  const handleLogOut = () => {
    dispatch(logout());
    dispatch({ type: "EMPTY_DATA" });
  };

  const handleDelete = () => {
    dispatch(deleteUser(auth.id));
    dispatch({ type: "EMPTY_DATA" });
  };

  return visible ? (
    <div className="relative self-end">
      <div className="absolute right-0 flex items-center px-8 py-3 rounded-2xl bg-gray-100 shadow-md space-x-4">
        <div className="p-3 rounded-full bg-slate-300 flex items-center justify-center">
          <FeatherIcon icon="user" stroke="teal" />
        </div>
        <div className="flex flex-col space-y-0.5 min-w-max">
          <span className="text-lg font-medium">
            {userData.username != null ? userData.username.toUpperCase() : ""}
          </span>
          <span className="text-sm text-gray-500">{userData.email}</span>
          <span
            className="text-sm text-teal-500 underline cursor-pointer"
            onClick={handleLogOut}
          >
            Log out
          </span>
          <span
            className="text-sm text-red-500 underline cursor-pointer"
            onClick={handleDelete}
          >
            Delete Account
          </span>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
}
