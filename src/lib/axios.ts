import Axios, { AxiosResponse, InternalAxiosRequestConfig } from "axios";
import Config from "@/config";
import { createHashMd5 } from "@/utils";

function authRequestInterceptor(
  config: InternalAxiosRequestConfig
): InternalAxiosRequestConfig {
  config.params = config.params || {};
  const ts = new Date().getTime();
  config.params["apikey"] = Config.PUBLIC_KEY;
  config.params["ts"] = ts;
  config.params["hash"] = createHashMd5(
    `${ts}${Config.PRIVATE_KEY}${Config.PUBLIC_KEY}`
  );
  return config;
}

function onFulfilled(response: AxiosResponse) {
  return response.data;
}

function onRejected(error: any) {
  return Promise.reject(error);
}

function baseFactory(baseURL: string) {
  return Axios.create({
    baseURL,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    proxy: {
      protocol: Config.PROXI_PROTOCOL,
      host: Config.PROXI_HOST,
      port: Config.PROXI_PORT,
    },
  });
}

function factory(baseURL: string) {
  const client = baseFactory(baseURL);
  client.interceptors.request.use(authRequestInterceptor);
  client.interceptors.response.use(onFulfilled, onRejected);
  return client;
}

export const marvelApi = factory(Config.API_URL);
