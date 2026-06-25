import { useEffect, useState } from "react";

/**
 * Returns the current time, refreshed every second, formatted as a 12-hour
 * clock with AM/PM — matching the dynamic island in the original template.
 */
export function useClock(): string {
  const [time, setTime] = useState<string>(() => formatTime(new Date()));

  useEffect(() => {
    const tick = () => setTime(formatTime(new Date()));
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

  return time;
}

function formatTime(date: Date): string {
  return date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
}
