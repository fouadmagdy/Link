export const cutLongWords = (text, maxLength) => {
  console.log("maxLength", maxLength);
  console.log("text", text);
  if (text.length > maxLength) {
    return text.substring(0, maxLength - 3) + "...";
  } else {
    return text;
  }
};
