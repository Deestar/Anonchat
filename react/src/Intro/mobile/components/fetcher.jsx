export const Fetcher = (url = "", method, params = {}, token) => {
  const getfetch = async () => {
    const send = await fetch(url, {
      method: method,
      body: params,
      headers: {
        Authorization: `Bearer ${token ?? ""}`,
        Accept: "application/json",
      },
    });
    const response = await send.json();
    if (response.errors) {
      return {
        ...response.errors,
        error: true,
      };
    } else {
      return response;
    }
  };
  return getfetch();
};
