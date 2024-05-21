import { useContext, useState } from "react";
import { BlogPost } from "../types/blogPost";
import AbstractUser from "./SVGs/AbstractUser";
import { convertImageToBase64 } from "../services/convertImage";
import { requestEditPost } from "../services/requests";
import { alertNoLogged, alertNoNetwork } from "../services/alerts";
import { GlobalContext } from "../context/globalContext";

type PropEditPost = {
  post: BlogPost;
  setIsEdit: (isEdit: boolean) => void;
}

function EditPost({ post, setIsEdit }: PropEditPost) {
  const { user: userLogged } = useContext(GlobalContext);
  const [editPost, setEditPost] = useState({ title: post.title, content: post.content, image: '' });
  const [disabled, setDisabled] = useState(true);
  if (!post.user) post.user = { ...userLogged, password: ''};
  const { title, content, created, user, image, updated } = post;
  const token = localStorage.getItem('token') || '';

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.name
    const value = e.target.value
    let image = '';
    if (e.target.files !== null) {
      image = await convertImageToBase64(e.target.files[0]);
    }
    setEditPost({ ...editPost, [input]: value, image });
    if (editPost.title !== '' && editPost.content !== '') setDisabled(false);
  };

  const clickEditPost = async () => {
    if (editPost.title === '' || editPost.content === '') return;
    const response = await requestEditPost(token, { ...editPost, id: post.id });
    if (response === 'error network') return alertNoNetwork();
    if (response.status !== 200) return alertNoLogged();
    post.title = response.data.title;
    post.content = response.data.content;
    post.image = response.data.image;
    setIsEdit(false);
  };

  return (
    <article className="bg-white rounded-lg p-5 mb-3">
      <div className="flex">
        {user.image === null ? <AbstractUser /> : <img className="h-14 w-14 rounded-2xl" src={user.image} alt="user" />}
        <div className="ml-2">
          <p className="font-serif">{user.name}</p>
          <p className="font-extralight text-xs">Postado em:{created.toLowerCase()}</p>
          <p className="font-extralight text-xs">Atualizado em:{updated.toLowerCase()}</p>
        </div>
      </div>

      <h2 className="font-extrabold">{title}</h2>
      <input
        className="bg-slate-100 text-slate-600 border border-slate-200 outline-none rounded-lg p-1 duration-300
        focus:border-slate-600"
        name="title"
        placeholder="Edite o titulo do post"
        value={editPost.title}
        onChange={handleChange}
      />

      <p className="font-sans">{content}</p>
      <input
        className="bg-slate-100 text-slate-600 border border-slate-200 outline-none rounded-lg p-1 duration-300
        focus:border-slate-600"
        name="content"
        placeholder="Edite o conteudo do post"
        value={editPost.content}
        onChange={handleChange}
      />

      {!image ? <img className="w-full" src={image} alt="post" /> : null}
      <p className="text-[10px] text-slate-600 my-3 font-semibold text-center">Escolha uma nova imagem</p>
      <input
        className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0
          file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"
        name="image"
        type="file"
        accept="image/png, image/jpeg"
        onChange={handleChange}
      />

      <div className="flex justify-end gap-2 pt-2">
        <button onClick={clickEditPost} disabled={disabled} className="hover:scale-110 disabled:cursor-not-allowed bg-green-500 rounded-xl p-1 active:scale-95">Salvar</button>
        <button onClick={() => setIsEdit(false)} className="hover:scale-110 bg-slate-600 rounded-xl p-1 active:scale-95">Cancelar</button>
      </div>
    </article>
  );
}

export default EditPost;