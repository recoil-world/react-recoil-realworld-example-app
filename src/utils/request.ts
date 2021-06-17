export const toQueryString = (obj: Record<string, string | number | undefined>) => {
  const querystring = new URLSearchParams();

  Object.entries(obj).forEach(([key, value]) => {
    querystring.append(key, (value ?? '').toString());
  });

  return querystring.toString();
};
