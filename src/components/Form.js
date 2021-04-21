import React, { useState } from "react";

import { Divider } from "antd";

const Form = (props) => {
  const [name, setName] = useState();

  const onChangeData = (value) => setName(value);

  const onClickData = () => setName("Hi ~~~~" + name);

  return (
    <div>
      <h3>Change on 'Key Up'</h3>

      <input
        type="text"
        placeholder="input your name"
        onChange={(e) => onChangeData(e.target.value)}
      ></input>

      <br></br>

      <p>
        Name:
        <span style={{ fontWeight: "bold" }}> {name}</span>
      </p>

      <Divider dashed />

      <h3>Change on 'Click'</h3>

      <input type="text" placeholder="input your name"></input>

      <button type="button" onClick={(e) => onClickData()}>
        Ok!
      </button>

      <br></br>

      <p>
        Name:
        <span style={{ fontWeight: "bold" }}> {name}</span>
      </p>
    </div>
  );
};

export default Form;
