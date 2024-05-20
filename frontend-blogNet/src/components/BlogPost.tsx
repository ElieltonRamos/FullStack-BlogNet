import { useContext, useState } from "react";
import { BlogPost } from "../types/blogPost";
import { GlobalContext } from "../context/globalContext";
import AbstractUser from "./SVGs/AbstractUser";
import DeleteSvg from "./SVGs/DeleteSvg";
import EditSvg from "./SVGs/EditSvg";
import { requestBlogPosts, requestDeletePost } from "../services/requests";
import { alertNoLogged, alertNoNetwork, alertConfirmDeletePost } from "../services/alerts";
import EditPost from "./EditPost";

type PropsBlogPost = {
  blogPost: BlogPost
}

function Post({ blogPost }: PropsBlogPost) {
  const [isEdit, setIsEdit] = useState(false);
  const { user: userLogged, setBlogPosts } = useContext(GlobalContext);
  const isOwnerPost = userLogged.id === blogPost.user.id;
  const token = localStorage.getItem('token') || '';

  const { title, content, created, user, image } = blogPost;

  const clickDeletePost = async () => {
    const confirmDelete = await alertConfirmDeletePost()
    if (!confirmDelete) return;
    const response = await requestDeletePost(token, blogPost);
    if (response === 'error network') return alertNoNetwork();
    if (response.status !== 204) return alertNoLogged();
    const newBlogPosts = await requestBlogPosts(token, false);
    if (newBlogPosts === 'error network') return alertNoNetwork();
    setBlogPosts(newBlogPosts.data);
  };

  const clickEditPost = () => {
    setIsEdit(true);
  };

  if (isEdit) return (
    <EditPost post={blogPost} setIsEdit={setIsEdit} />
  );

  return (
    <article className="bg-white rounded-lg p-5 mb-3">
      <div className="flex">
      {user.image === null ? <AbstractUser /> : <img className="h-14 w-14 rounded-2xl" src={user.image} alt="user" />}
        <div className="ml-2">
          <p className="font-serif">{user.name}</p>
          <p className="font-extralight text-xs">Postado em:{created.toLowerCase()}</p>
        </div>
      </div>
      <h2 className="font-extrabold">{title}</h2>
      <p className="font-sans">{content}</p>
      { image !== '' ? <img className="w-full" src={image} alt="post" /> : null}
      <div className="flex justify-end gap-2 pt-2">
        {isOwnerPost ?
          <button onClick={clickDeletePost} className="hover:scale-110"><DeleteSvg /></button> : null}
        {isOwnerPost ?
          <button onClick={clickEditPost} className="hover:scale-110"><EditSvg /></button> : null}
      </div>
    </article>
  );
}

export default Post;