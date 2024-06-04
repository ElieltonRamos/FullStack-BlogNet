import { UserNoPassword } from "../types/user";
import { alertNoLogged } from "./alerts";
import { requestUser } from "./requests";

type SetUser = (user: UserNoPassword) => void;

export const getUser = async (setUser: SetUser) => {
  const user = await requestUser();
  if ('message' in user) return alertNoLogged();
  setUser(user)
};