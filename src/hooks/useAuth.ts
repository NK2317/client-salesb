import { useStore } from "vuex";

export default function useAuth() {
  const store = useStore();
  const login = async (user: string, password: string) => {
    const { error, data } = await store.dispatch("auth/login", { user, password });
    if (error) throw new Error(error?.message);

    if (data) {
      localStorage.setItem("auth/user_data", JSON.stringify(data));
      return true;
    }
  }

  const getAuthInfo = () => JSON.parse(localStorage.getItem("auth/user_data") || '');

  const logout = async () => {
    const { token, userID } = getAuthInfo();
    await store.dispatch("auth/logout", { userID, token });
    return true;
  }

  return { login, logout, getAuthInfo };
}
