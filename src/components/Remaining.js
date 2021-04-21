import React from "react";
import PropTypes from "prop-types";

const Remaining = (props) => {
  const remainingTask = props.reminders.filter((reminder) => {
    return !reminder.isDone;
  }).length;

  return (
    <div>
      <p>
        {remainingTask} out of {props.reminders.length} tasks
      </p>
    </div>
  );
};

Remaining.propTypes = {
  reminders: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      isDone: PropTypes.bool,
    })
  ),
};

export default Remaining;
