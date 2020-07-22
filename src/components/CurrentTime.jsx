import React, { useState } from "react";
const CurrentTime = () => {
  var today_date = new Date();
  var time = today_date.toLocaleTimeString();
  const [Time, setGetTime] = useState(time);

  // This is react interval call which recursivly call after each 1000ms
  setInterval(() => {
    var today_date = new Date();
    var time = today_date.toLocaleTimeString();
    setGetTime(time);
  }, 1000);
  return <h1 className="time_text">{Time}</h1>;
};
export default CurrentTime;
