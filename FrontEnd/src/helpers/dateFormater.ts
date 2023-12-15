import { DateTimeFormatOptions } from "../interface/helpers";

export const dateFormater = (date: number | Date | undefined) => {
  const options: DateTimeFormatOptions = {
    // weekday: "short",
    year: "numeric",
    month: "long",
    day: "numeric",
    // hour: "numeric",
    // minute: "numeric",
    // second: "numeric",
    // timeZoneName: "short",
  };
  return new Intl.DateTimeFormat("en-US", options).format(date);
};

export function formatTimeAgo(isoDate: string): string {
  const now = new Date();
  const date = new Date(isoDate);
  const timeDifference = now.getTime() - date.getTime();

  const millisecondsPerSecond = 1000;
  const millisecondsPerMinute = 60 * millisecondsPerSecond;
  const millisecondsPerHour = 60 * millisecondsPerMinute;
  const millisecondsPerDay = 24 * millisecondsPerHour;
  const millisecondsPerMonth = 30 * millisecondsPerDay;
  const millisecondsPerYear = 365 * millisecondsPerDay;

  if (timeDifference >= millisecondsPerYear) {
    const years = Math.floor(timeDifference / millisecondsPerYear);
    return `${years} years ago`;
  } else if (timeDifference >= millisecondsPerMonth) {
    const months = Math.floor(timeDifference / millisecondsPerMonth);
    return `${months} months ago`;
  } else if (timeDifference >= millisecondsPerDay) {
    const days = Math.floor(timeDifference / millisecondsPerDay);
    return `${days} days ago`;
  } else if (timeDifference >= millisecondsPerHour) {
    const hours = Math.floor(timeDifference / millisecondsPerHour);
    return `${hours} hours ago`;
  } else {
    const minutes = Math.floor(timeDifference / millisecondsPerMinute);
    return `${minutes} minutes ago`;
  }
}
