export const parseDate = (dateString) => {
  return new Date(dateString).toGMTString().slice(5, 16);
};
