import { UserNoPassword } from "../types/user";
import { alertNoLogged, alertNoNetwork } from "./alerts";
import { requestUser } from "./requests";

type SetUser = (user: UserNoPassword) => void;

export const getUser = async (token: string, setUser: SetUser) => {
  const user = await requestUser(token);
  if (user === 'error network') return alertNoNetwork();
  if (user.status !== 200) return alertNoLogged();
  setUser(user.data)
};