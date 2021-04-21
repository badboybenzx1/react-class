import React from "react";
import Users from "./Users";

const WorkshopList = (props) => {
  const users = [
    { id: 1, name: "John", age: 30 },
    { id: 2, name: "John 2", age: 33 },
    { id: 3, name: "John 3", age: 35 },
  ];

  return (
    <div>
      <h1>Workshop #list</h1>
      <Users users={users}></Users>
    </div>
  );
};

WorkshopList.propTypes = {};

export default WorkshopList;
