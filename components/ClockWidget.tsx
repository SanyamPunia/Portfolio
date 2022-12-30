import IconSet from "app/IconSet";
import { getDateTime } from "lib/util/get-date-time";

type Props = {};

const ClockWidget = (props: Props) => {
  const [formattedDay, formattedDate, formattedTime] = getDateTime();

  return (
    <div className="text-primary-white text-right space-y-1.5">
      <h1 className="text-3xl">{formattedTime}</h1>
      <div className="text-primary-gray">
        <p>{formattedDate}</p>
        <p>{formattedDay}</p>
      </div>
      <IconSet />
    </div>
  );
};

export default ClockWidget;
