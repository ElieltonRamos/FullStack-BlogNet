import { UserNoPassword } from "../types/user";
import { alertError } from "./alerts";
import { convertImageToBase64 } from "./convertImage";
import { requestUser } from "./requests";

type SetUser = (user: UserNoPassword) => void;

export const getUser = async (setUser: SetUser) => {
  const user = await requestUser();
  if ('message' in user) return alertError(user.message);
  setUser(user)
};

export const handleChange = async <t>(
  e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>,
  setState: React.Dispatch<React.SetStateAction<t>>,
  state: t,
  setMsgError: React.Dispatch<React.SetStateAction<string>>,
) => {
  const input = e.target.name;
  const value = e.target.value;

  if ('files' in e.target && input === 'image') {
    const files = e.target.files;
    const convertImage = await convertImageToBase64(files);
    if (typeof convertImage === 'string') return setMsgError(convertImage);
    const image = convertImage.imageBase64;
    return setState({ ...state, image });
  }
  setState({ ...state, [input]: value });
};