import React, { useRef } from "react";

const CallbackForm = (props) => {
  const inputNameRef = useRef(null);

  const onClickData = () => {
    props.onCallback("Hi ~~~~" + inputNameRef.current.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="input your value"
        ref={inputNameRef}
      ></input>

      <button type="button" onClick={(e) => onClickData()}>
        Ok!
      </button>
    </div>
  );
};

export default CallbackForm;
