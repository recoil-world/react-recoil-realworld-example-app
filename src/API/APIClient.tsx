const BASE_URL = 'https://conduit.productionready.io/api';

interface APIOption<T> {
  accessToken?: string;
  body?: T;
}

const fetchOption = <T,>(option: APIOption<T>): RequestInit => ({
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
    ...(option.accessToken && { Authorization: `Token ${option.accessToken}` }),
  },
});

const request = async (path: string, fetchOption: RequestInit) => {
  const response = await fetch(path, fetchOption);
  const responseData = await response.json();

  if (!response.ok) throw Error(responseData.errors.body.pop());

  return responseData;
};

const APIClient = {
  get<T>(path: string, accessToken?: string) {
    return request(BASE_URL + path, fetchOption({ accessToken })) as Promise<T>;
  },

  post<T>(path: string, option: T) {
    return request(BASE_URL + path, fetchOption(option));
  },

  put<T>(path: string, option: T) {
    return request(BASE_URL + path, fetchOption(option));
  },

  delete(path: string, accessToken?: string) {
    return request(BASE_URL + path, fetchOption({ accessToken }));
  },
};

export default APIClient;
