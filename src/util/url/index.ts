// todo implement param addition to url (?param1=value&param2=value2)
export const getProcessedUrl = (
  url: string,
  params: Record<string, unknown> = {}
): string => {
  let _url = `http://localhost:3000${url}`;
  Object.keys(params).forEach((key) => {
    _url += `?${key}=${params[key]}&`;
  });
  return _url;
};
