export const parseDate = (dateString) => {
  return new Date(dateString).toUTCString().slice(5, 16);
};
