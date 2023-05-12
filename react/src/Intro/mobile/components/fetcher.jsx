export const Fetcher = ({ url, method, params, token }) => {
  const getfetch = async () => {
    const send = await fetch(url, {
      method: method,
      body: params,
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
      },
    });
    const response = await send.json();
    return response;
  };
  return getfetch();
};
