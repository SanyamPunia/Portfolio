import date from "date-and-time";

export function getDateTime(): Array<string> {
  const current = new Date();
  const formattedDay = date.format(current, "dddd");
  const formattedDate = date.format(current, "MMM DD YYYY");
  const formattedTime = date.format(current, "HH:mm A");

  return [formattedDay, formattedDate, formattedTime];
}
