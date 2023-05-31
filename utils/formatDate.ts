const formatDate = (date: string) => {
  const inputDate = new Date(date);
  const formattedDate = inputDate.toISOString();
  return formattedDate;
};

export { formatDate };
