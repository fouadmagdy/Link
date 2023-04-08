export const cutLongWords = (text, maxLength) => {
  if (text.length > maxLength) {
    return text.substring(0, maxLength - 3) + "...";
  } else {
    return text;
  }
};

export const formatDate = (toLocaleDateString) => {
  const date = new Date(toLocaleDateString);
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const day = days[date.getDay()];
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  const formattedDate = `${day} ${date.getDate()} ${month} ${year}`;
  return formattedDate;
};
