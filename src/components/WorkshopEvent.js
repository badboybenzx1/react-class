import React, { useState } from "react";

import { Card } from "antd";
import { Divider } from "antd";

import CallbackForm from "./CallbackForm";

const WorkshopEvent = (props) => {
  const [name, setName] = useState();

  const logValue = (value) => {
    console.log(value);
    setName(value);
  };

  return (
    <div style={{ width: 300, margin: "auto", marginBottom: 15 }}>
      <h1>Workshop #EventCallback</h1>
      <Card>
        <p>Parent Component: {name}</p>

        <Divider dashed />

        <p>Child Component: </p>

        <CallbackForm onCallback={logValue}></CallbackForm>
      </Card>
    </div>
  );
};

WorkshopEvent.propTypes = {};

export default WorkshopEvent;
