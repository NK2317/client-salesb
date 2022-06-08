import { UserInfoType } from "@/store/auth/types";
import { useStore } from "vuex";

type ResponseType = {
  login: (user: string, password: string) => Promise<true | undefined>;
  logout: () => Promise<boolean>;
  getAuthInfo: () => UserInfoType;
};

export default function useAuth(): ResponseType {
  const store = useStore();
  const login = async (user: string, password: string) => {
    const { error, data } = await store.dispatch("auth/login", {
      user,
      password,
    });

    if (error) throw new Error(error?.message);

    if (data) {
      //localStorage.setItem("auth/user_data", JSON.stringify(data));
      sessionStorage.setItem("auth/user_data", JSON.stringify(data));
      return true;
    }
  };

  const getAuthInfo = (): UserInfoType =>
  //JSON.parse(localStorage.getItem("auth/user_data") || "");
    JSON.parse(sessionStorage.getItem("auth/user_data") || "");

  const logout = async () => {
    const { accessToken, userID } = getAuthInfo();
    await store.dispatch("auth/logout", { userID, accessToken });
    return true;
  };

  return { login, logout, getAuthInfo };
}
