export function EditUser({ setEditUser }: PropEditUser) {
  const handleEditUser = () => { };

  return (
    <div className="shadow-xl bg-white border mr-3 border-slate-200 flex flex-col items-center gap-2 rounded-xl p-2 mb-2 text-sm h-min">
      <h1 className="mt-8 text-center text-slate-500 text-sm font-bold">Este e o Seu Perfil</h1>

      <img className="h-14 w-14" src="./abstract-user.svg" alt="user" />
      <input
        className="block w-full bg-gray-300 rounded-md text-sm text-slate-500 file:mr-4 file:py-2file:px-4 file:rounded-full file:border-0
        file:text-sm file:font-semibold file:bg-gray-300 file:text-violet-700 hover:file:bg-gray-400"
        name="image"
        type="file"
        accept="image/png, image/jpeg"
      />
      <p className="text-slate-500 text-sm font-bold">Nome: Fulano de Tal</p>
      <input
        className="bg-slate-100 text-slate-600 border border-slate-200 outline-none rounded-lg p-1 duration-300 focus:border-slate-600"
        type="text"
        placeholder="altere seu nome aqui"
      />
      <p className="text-slate-500 text-sm font-bold">Email: email.com</p>
      <input
        className="bg-slate-100 text-slate-600 border border-slate-200 outline-none rounded-lg p-1 duration-300 focus:border-slate-600"
        type="text"
        placeholder="altere seu email aqui"
      />

      <button
        onClick={handleEditUser}
        className="font-bold text-gray-800 transition-all duration-300 active:scale-95 w-full bg-green-400 stroke-slate-600 border 
        border-slate-200 col-span-2 flex justify-center rounded-lg p-2 hover:border-slate-800 hover:text-white"
      >
        Salvar Alterações
      </button>
      <button
        onClick={() => setEditUser(false)}
        className="font-bold text-gray-800  transition-all duration-300 active:scale-95 w-full bg-gray-400 stroke-slate-600 border 
          border-slate-200 col-span-2 flex justify-center rounded-lg p-2 hover:border-slate-800 hover:text-white"
      >
        Cancelar
      </button>

    </div>
  )
}

type PropEditUser = {
  setEditUser: (value: boolean) => void;
};

export function ViewUser({ setEditUser }: PropEditUser) {
  return (
    <div className="shadow-xl mb-2 mr-3 md:mt-10 h-[235px] min-w-80 bg-white border border-slate-200 flex flex-col items-center gap-2 rounded-xl p-2 text-sm">
      <h1 className="text-center text-slate-500 text-sm font-bold">Este e o Seu Perfil</h1>
      <img className="h-14 w-14" src="./abstract-user.svg" alt="user" />
      <p className="text-slate-500 text-sm font-bold">Nome: Fulano de Tal</p>
      <p className="text-slate-500 text-sm font-bold">Email: email.com</p>
      <button onClick={() => setEditUser(true)} className="bg-blue-600 text-white font-bold rounded-md p-1 w-20">Editar</button>
    </div>
  )
}