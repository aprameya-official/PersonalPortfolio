const createSearchParams = (x: { [x: string]: any }) => {
  return (
    "?" +
    Object.entries(x)
      .map(([key, value]) => `${key}=${value}`)
      .join("&")
  );
};

export default createSearchParams;
