import { useContext, useState } from "react";
import { GlobalContext } from "../context/globalContext";
import { requestEditUser } from "../services/requests";
import AbstractUser from "./SVGs/AbstractUser";
import { handleChange } from "../services/utils";

export function EditUser({ setEditUser }: PropEditUser) {
  const { user, setUser } = useContext(GlobalContext);
  const [ newUser, setNewUser ] = useState(user);
  const [msgError, setMsgError] = useState('');

  const userImageExists = user.image === '' || user.image === null || user.image === undefined;


  const handleEditUser = async () => {
    if (newUser.name === '' || newUser.email === '') return setMsgError('name and email are necessary');
    const response = await requestEditUser(newUser);
    if ('message' in response) return setMsgError(response.message);
    setUser(newUser);
    setEditUser(false);
  };

  return (
    <div className="shadow-xl bg-white border mr-3 border-slate-200 flex flex-col items-center gap-2 rounded-xl p-2 mb-2 text-sm h-min">
      <h1 className="mt-8 text-center text-slate-500 text-sm font-bold">This is Your Profile</h1>

      {userImageExists ? <AbstractUser />: <img className="h-14 w-14 rounded-2xl" src={user.image} alt="user" />}
      <input
        className="block w-full bg-gray-300 rounded-md text-sm text-slate-500 file:mr-4 file:py-2file:px-4 file:rounded-full file:border-0
        file:text-sm file:font-semibold file:bg-gray-300 file:text-violet-700 hover:file:bg-gray-400"
        name="image"
        type="file"
        onChange={(e) => handleChange(e, setNewUser, newUser, setMsgError)}
        accept="image/png, image/jpeg"
      />
      <p className="text-slate-500 text-sm font-bold">Nome: Fulano de Tal</p>
      <input
        className="bg-slate-100 text-slate-600 border border-slate-200 outline-none rounded-lg p-1 duration-300 focus:border-slate-600"
        type="text"
        name="name"
        value={newUser.name}
        onChange={(e) => handleChange(e, setNewUser, newUser, setMsgError)}
        placeholder="change your name here"
      />
      <p className="text-slate-500 text-sm font-bold">Email: email.com</p>
      <input
        className="bg-slate-100 text-slate-600 border border-slate-200 outline-none rounded-lg p-1 duration-300 focus:border-slate-600"
        type="email"
        name="email"
        value={newUser.email}
        onChange={(e) => handleChange(e, setNewUser, newUser, setMsgError)}
        placeholder="change your e-mail here"
      />

      <span className="text-red text-[10px] mb-[-10px] font-semibold text-center">{msgError}</span>

      <button
        onClick={handleEditUser}
        className="disabled:cursor-not-allowed text-gray-800 transition-all duration-300 active:scale-95
          w-full bg-green-400 stroke-slate-600 border 
        border-slate-200 col-span-2 flex justify-center rounded-lg p-2 hover:border-slate-800 hover:text-white"
      >
        Save editions
      </button>
      <button
        onClick={() => setEditUser(false)}
        className="font-bold text-gray-800  transition-all duration-300 active:scale-95 w-full bg-gray-400 stroke-slate-600 border 
          border-slate-200 col-span-2 flex justify-center rounded-lg p-2 hover:border-slate-800 hover:text-white"
      >
        Cancel
      </button>

    </div>
  )
}

type PropEditUser = {
  setEditUser: (value: boolean) => void;
};

export function ViewUser({ setEditUser }: PropEditUser) {
  const { user } = useContext(GlobalContext);
  const userImageExists = user.image === '' || user.image === null || user.image === undefined;


  return (
    <div className="shadow-xl mb-2 mr-3 md:mt-10 h-[235px] min-w-80 bg-white border border-slate-200 flex flex-col items-center gap-2 rounded-xl p-2 text-sm">
      <h1 className="text-center text-slate-500 text-sm font-bold">This is Your Profile</h1>
      {userImageExists ? <AbstractUser /> : <img className="h-14 w-14 rounded-2xl" src={user.image} alt="user" />}
      <p className="text-slate-500 text-sm font-bold">Hello! {user.name}</p>
      <p className="text-slate-500 text-sm font-bold">Email: {user.email}</p>
      <button onClick={() => setEditUser(true)} className="bg-blue-600 text-white font-bold rounded-md p-1 w-20">To Edit</button>
    </div>
  )
}