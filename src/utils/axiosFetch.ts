import axios from "axios";

type apiMethods = "GET" | "POST" | "PUT" | "DELETE";

const axiosCall = {
  GET: axios.get,
  POST: axios.post,
  PUT: axios.put,
  DELETE: axios.delete,
};

const axiosFetch = async (
  route: string,
  method: apiMethods,
  payload?: object
) => {
  const backendAddr = `http://localhost:3005`;
  if (method === "GET") {
    const response = await axiosCall[method](`${backendAddr}${route}`, {
      withCredentials: true,
    });
    return response;
  }
  const response = await axiosCall[method](`${backendAddr}${route}`, payload, {
    withCredentials: true,
  });
  return response;
};

export default axiosFetch;
