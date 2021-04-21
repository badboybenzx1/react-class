import React, { useState, useEffect } from "react";

const Clock = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    let secTimer = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => clearInterval(secTimer);
  }, []);

  return (
    <div>
      <small>{currentDate.toUTCString()}</small>
    </div>
  );
};

export default Clock;
