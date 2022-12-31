import { useEffect, useState } from "react";
import IconSet from "app/IconSet";
import { getDateTime } from "lib/util/get-date-time";
import { icons } from "lib/social-icons";

type Props = {};

const ClockWidget = (props: Props) => {
  const [time, setTime] = useState<string[]>(getDateTime());

  useEffect(() => {
    setInterval(() => {
      setTime(getDateTime());
    }, 1000);
  }, []);

  const [formattedDay, formattedDate, formattedTime] = time;

  return (
    <div className="text-primary-white text-right space-y-3.5">
      <h1 className="text-4xl">{formattedTime}</h1>
      <div className="text-primary-gray">
        <p className="text-lg">{formattedDate}</p>
        <p className="text-lg">{formattedDay}</p>
      </div>
      <IconSet icons={icons} />
    </div>
  );
};

export default ClockWidget;
