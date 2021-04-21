import React, { useRef } from "react";
import PropTypes from "prop-types";

const ReminderForm = (props) => {
  const inputNameRef = useRef(null);

  const onClickData = () => {
    if (inputNameRef.current.value) {
      props.addNewReminder({ name: inputNameRef.current.value, isDone: false });
      inputNameRef.current.value = "";
    } else {
      alert("should not be empty.");
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="add new reminder"
        ref={inputNameRef}
      ></input>

      <button type="button" onClick={(e) => onClickData()}>
        Add
      </button>
    </div>
  );
};

ReminderForm.propTypes = {
  addNewReminder: PropTypes.func,
};

export default ReminderForm;
