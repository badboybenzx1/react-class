import React from "react";
import { Card } from "antd";

const Users = (props) => {
  const list = props.users.map((user) => (
    <Card
      style={{ width: 300, margin: "auto", marginBottom: 15 }}
      key={user.id}
    >
      <p>
        {user.name}, {user.age}
      </p>
    </Card>
  ));
  return <div>{list}</div>;
};

export default Users;
