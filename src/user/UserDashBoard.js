import React from "react";
import Base from "../core/Base";
import {isAutheticated } from "../auth/helper";


const UserDashBoard = () => {
    const { user } = isAutheticated();

  return (
    <Base title="UserDashBoard page" description=" ">
      <h1>THis is {user.name} DashBoard page</h1>
    </Base>
  );
};

export default UserDashBoard;
