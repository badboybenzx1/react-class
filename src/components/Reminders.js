import React from "react";
import PropTypes from "prop-types";

const Reminders = (props) => {
  const list = props.reminders.map((reminder, index) => (
    <li
      key={index}
      className={reminder.isDone ? "is-done" : ""}
      onClick={(e) => props.onClickDone(index)}
    >
      <strong style={{ cursor: "pointer", userSelect: "none" }}>
        {reminder.name}
      </strong>
    </li>
  ));

  return (
    <div>
      <ul style={{ width: 250, textAlign: "initial", margin: "auto" }}>
        {list}
      </ul>
    </div>
  );
};

Reminders.propTypes = {
  reminders: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      isDone: PropTypes.bool,
    })
  ),
};

export default Reminders;
