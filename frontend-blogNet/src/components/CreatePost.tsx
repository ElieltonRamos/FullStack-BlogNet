import { useState } from "react";
import { convertImageToBase64 } from "../services/convertImage";

function CreatePost() {
  const [newPost, setNewPost] = useState({
    title: "",
    content: "",
    image: "",
  });

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.name
    const value = e.target.value
    let image = '';
    if (e.target.files !== null) {
      image = await convertImageToBase64(e.target.files[0]);
    }
    setNewPost({ ...newPost, [input]: value, image });
  };

  const createPost = async () => {
    console.log(newPost);
  };

  return (
    <div className="bg-white border mb-2 border-slate-200 flex flex-col gap-2 rounded-xl p-2 text-sm">
      <h1 className="text-center text-slate-500 text-sm font-bold">No que voce esta pensando?</h1>
      
      <input
        className="bg-slate-100 text-slate-600 border border-slate-200 outline-none rounded-lg p-1 duration-300
         focus:border-slate-600"
        itemType="text"
        placeholder="Sobre o que você quer falar?"
      />

      <textarea
        itemType="text"
        placeholder="Solta o verbo!"
        className="bg-slate-100 h-10 text-slate-600 placeholder:text-slate-600 placeholder:opacity-50 border border-slate-200
          resize-none outline-none rounded-lg p-2 duration-300 focus:border-slate-600"
      />

      <span className="text-slate-500 text-[10px] mb-[-15px] font-semibold text-center">Adicione uma imagem</span>
      <input 
        className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0
          file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"
        name="image"
        type="file"
        accept="image/png, image/jpeg"
        onChange={handleChange}
      />

      <button
        onClick={createPost}
        className="transition-all duration-300 active:scale-95 w-full bg-blue-400 stroke-slate-600 border 
          border-slate-200 col-span-2 flex justify-center rounded-lg p-2 hover:border-slate-800 hover:text-white"
          >
        <svg fill="none" viewBox="0 0 24 24" height="30px" width="30px" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="1.5" d="M7.39999 6.32003L15.89 3.49003C19.7 2.22003 21.77 4.30003 20.51 8.11003L17.68 16.6C15.78 22.31 12.66 22.31 10.76 16.6L9.91999 14.08L7.39999 13.24C1.68999 11.34 1.68999 8.23003 7.39999 6.32003Z"/>
          <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="1.5" d="M10.11 13.6501L13.69 10.0601" />
        </svg>
      </button>

    </div>
  )

  // return (
  //   <form onSubmit={submitCreatePost} className="w-80 bg-white rounded-lg p-5 mb-3">
  //     <input
  //       className="w-full mb-3 p-2 rounded-lg border border-gray-300"
  //       type="text"
  //       name="title"
  //       placeholder="Título"
  //       value={newPost.title}
  //       onChange={handleChange}
  //     />
  //     <input
  //       className="w-full mb-3 p-2 rounded-lg border border-gray-300"
  //       type="text"
  //       name="content"
  //       placeholder="Conteúdo"
  //       value={newPost.content}
  //       onChange={handleChange}
  //     />
  //     <input
  //       className="w-full mb-3 p-2 rounded-lg border border-gray-300"
  //       name="image"
  //       type="file"
  //       onChange={handleChange}
  //       accept="image/png, image/jpeg" 
  //     />
  //     <button
  //       type="submit"
  //       className="w-full bg-blue-500 text-white p-2 rounded-lg"
  //     >
  //       Publicar
  //     </button>
  // </form>
  // )
}

export default CreatePost;