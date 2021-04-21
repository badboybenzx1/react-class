import React from "react";
import PropTypes from "prop-types";
import { Card } from "antd";
import Clock from "./Clock";

const User = (props) => {
  return (
    <div style={{ width: 300, margin: "auto", marginBottom: 15 }}>
      <Card>
        {props.name}

        <Clock></Clock>
      </Card>
    </div>
  );
};

User.propTypes = {
  name: PropTypes.string,
};

export default User;
