const dateToString = (dateObject) => {
  const option = {
    day: "numeric",
    month: "short",
    year: "numeric",
  };
  return dateObject.toLocaleString("en-GB", option);
};

export { dateToString };
