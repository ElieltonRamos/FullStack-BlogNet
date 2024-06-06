import { useContext, useState } from "react";
import { BlogPost } from "../types/blogPost";
import AbstractUser from "./SVGs/AbstractUser";
import { requestEditPost } from "../services/requests";
import { alertError } from "../services/alerts";
import { GlobalContext } from "../context/globalContext";
import { handleChange } from "../services/utils";

type PropEditPost = {
  post: BlogPost;
  setIsEdit: (isEdit: boolean) => void;
}

function EditPost({ post, setIsEdit }: PropEditPost) {
  const { user: userLogged } = useContext(GlobalContext);
  const [editPost, setEditPost] = useState({ title: post.title, content: post.content, image: '' });
  const [msgError, setMsgError] = useState('');
  if (!post.user) post.user = { ...userLogged, password: ''};
  const { title, content, created, user, image, updated } = post;
  const postImageExists = image === '' || image === null || image === undefined;
  const userImageExists = userLogged.image === '' || userLogged.image === null || userLogged.image === undefined;


  const clickEditPost = async () => {
    if (editPost.title === '' || editPost.content === '') return setMsgError('title and content are necessary');
    const response = await requestEditPost({ ...editPost, id: post.id });
    
    if ('message' in response) return alertError(response.message);

    post.title = response.title;
    post.content = response.content;
    post.image = response.image;
    post.updated = response.updated;
    setIsEdit(false);
  };

  return (
    <article className="bg-white rounded-lg p-5 mb-3">
      <div className="flex">
        {userImageExists ? <AbstractUser /> : <img className="h-14 w-14 rounded-2xl" src={user.image} alt="user" />}
        <div className="ml-2">
          <p className="font-serif">{user.name}</p>
          <p className="font-extralight text-xs">Postado em:{created.toLowerCase()}</p>
          {updated ? <p className="font-extralight text-xs">Atualizado em:{updated.toLowerCase()}</p> : null}
        </div>
      </div>

      <h2 className="font-extrabold">{title}</h2>
      <input
        className="bg-slate-100 text-slate-600 border border-slate-200 outline-none rounded-lg p-1 duration-300
        focus:border-slate-600"
        name="title"
        placeholder="Edit the post title"
        value={editPost.title}
        onChange={(e) => handleChange(e, setEditPost, editPost, setMsgError)}
      />

      <p className="font-sans">{content}</p>
      <input
        className="bg-slate-100 text-slate-600 border border-slate-200 outline-none rounded-lg p-1 duration-300
        focus:border-slate-600"
        name="content"
        placeholder="Edit the post content"
        value={editPost.content}
        onChange={(e) => handleChange(e, setEditPost, editPost, setMsgError)}
      />

      {!postImageExists ? <img className="w-full" src={image} alt="post" /> : null}
      <p className="text-[10px] text-slate-600 my-3 font-semibold text-center">Choose a new image</p>
      <input
        className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0
          file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"
        name="image"
        type="file"
        accept="image/png, image/jpeg"
        onChange={(e) => handleChange(e, setEditPost, editPost, setMsgError)}
      />
      <span className="text-red text-[10px] mb-[-10px] font-semibold text-center">{msgError}</span>

      <div className="flex justify-end gap-2 pt-2">
        <button onClick={clickEditPost} className="hover:scale-110 disabled:cursor-not-allowed bg-green-500 rounded-xl p-1 active:scale-95">Salvar</button>
        <button onClick={() => setIsEdit(false)} className="hover:scale-110 bg-slate-600 rounded-xl p-1 active:scale-95">Cancel</button>
      </div>
    </article>
  );
}

export default EditPost;