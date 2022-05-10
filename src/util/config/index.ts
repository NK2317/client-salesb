import { UserInfoType } from "@/store/auth/types";

type ReturnType = {
  body: string | undefined;
  method: string;
  headers: Headers;
};
type ParamsType = {
  body: Record<string, any>;
  method: string;
  headers: Headers;
};
export const getStandardConfig = (
  params: ParamsType | any = false
): ReturnType | undefined => {
  const {
    body = false,
    method = "GET",
    headers = false,
    requireToken = true,
  } = params;
  const config = {
    method,
    body: body ? JSON.stringify(body) : undefined,
    headers: headers || new Headers({ "Content-Type": "application/json" }),
  };

  if (requireToken) {
    const json = localStorage.getItem("auth/user_data");
    const { accessToken }: UserInfoType = JSON.parse(json || '');
    config.headers = new Headers({
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    });
  }

  return config;
};
