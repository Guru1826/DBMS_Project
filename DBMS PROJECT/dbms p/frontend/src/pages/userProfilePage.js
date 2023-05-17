import React, { useContext } from "react";
import { Context } from "../index";
import UserNavbar from "./userNavbar";

function UserProfilePage() {
  const { user } = useContext(Context);

  return (
    <>
      <UserNavbar />
      <div className="card">
        <h1 className="card-title">Name:</h1>
        <p className="card-text">{user.name}</p>

        <h1 className="card-title">Email:</h1>
        <p className="card-text">{user.email}</p>

        <h1 className="card-title">Branch:</h1>
        <p className="card-text">{user.branch}</p>
      </div>
    </>
  );
}

export default UserProfilePage;


