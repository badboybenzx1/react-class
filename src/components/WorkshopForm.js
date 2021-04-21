import React from "react";

import { Card } from "antd";
import Form from "./Form";

const WorkshopForm = (props) => {
  return (
    <div  style={{ width: 300, margin: "auto", marginBottom: 15 }}>
      <h1>Workshop #Form</h1>
      <Card>
        <Form></Form>
      </Card>
    </div>
  );
};

export default WorkshopForm;
