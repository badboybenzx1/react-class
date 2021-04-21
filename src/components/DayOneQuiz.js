import React, { useState } from "react";

import { Card } from "antd";
import ReminderForm from "./ReminderForm";
import Reminders from "./Reminders";
import Remaining from "./Remaining";

const DayOneQuiz = (props) => {
  const [reminders, setReminders] = useState([]);

  const addReminder = (value) => {
    const exits = reminders.find((x) => x.name === value.name);

    // debugger
    if (!exits) {
      setReminders([...reminders, value]);
    } else {
      alert("should not same value.");
    }
  };

  const onClickDone = (index) => {
    let tempReminders = [...reminders];

    tempReminders[index].isDone = !tempReminders[index].isDone;

    setReminders(tempReminders);
  };

  return (
    <div>
      <h1>DayOne #Quiz</h1>
      <Card>
        <h4>Reminders</h4>

        <ReminderForm addNewReminder={addReminder}></ReminderForm>

        <Remaining reminders={reminders}></Remaining>

        <Reminders reminders={reminders} onClickDone={onClickDone}></Reminders>
      </Card>
    </div>
  );
};

export default DayOneQuiz;
