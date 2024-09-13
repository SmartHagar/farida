/** @format */

import { momentId } from "@/utils/momentIndonesia";
import { useEffect, useState } from "react";
type Props = {};

const DigitalClock = (props: Props) => {
  const [time, setTime] = useState<any>(null);

  useEffect(() => {
    const intervalID = setInterval(() => {
      setTime(momentId());
    }, 1000);

    // Clear interval when component unmounts
    return () => clearInterval(intervalID);
  }, []);

  // Render null if time is not yet set (server-side rendering)
  if (!time) return null;

  return (
    <div>
      <h1>{time.format("HH:mm:ss")}</h1>
    </div>
  );
};

export default DigitalClock;
