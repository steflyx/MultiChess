import { useEffect, useState } from "react";
import "./Clock.css";

export function Clock({ nextMoveDate, timeOver }) {
  const [now, setNow] = useState(new Date());

  function computeTimeRemaining(earliestDate, latestDate) {
    return latestDate - earliestDate;
  }

  function computeAndFormatTimeRemaining(now, nextMoveDate) {
    const timeRemaining = computeTimeRemaining(now, nextMoveDate);
    return formatClock(timeRemaining);
  }

  function formatClock(timeMs) {
    const timeMinutes = Math.floor(timeMs / 60000);
    const timeSeconds = Math.floor(timeMs / 1000) % 60;
    return (
      timeMinutes.toLocaleString("en-US", {
        minimumIntegerDigits: 2,
        useGrouping: false,
      }) +
      ":" +
      timeSeconds.toLocaleString("en-US", {
        minimumIntegerDigits: 2,
        useGrouping: false,
      })
    );
  }

  function refreshClock() {
    setNow(new Date());
  }

  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);

  useEffect(() => {
    return computeTimeRemaining(now, nextMoveDate) < 0 ? timeOver() : null;
  }, [now]);

  return (
    <h1 className="clock">
      Time remaining before next move:{" "}
      {now > nextMoveDate
        ? formatClock(0)
        : computeAndFormatTimeRemaining(now, nextMoveDate)}
    </h1>
  );
}
