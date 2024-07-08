export const getUniqueId = () => {
  return "_" + Math.random().toString(36).substring(2, 9);
};

export const getListKeyFromContext = (context) => {
  const { localId: id } = context;
  return id.split("/")[id.split("/").length - 1];
};
