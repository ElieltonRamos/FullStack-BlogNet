import { useContext } from "react";
import { BlogPost } from "../types/blogPost";
import { GlobalContext } from "../context/globalContext";

type PropsBlogPost = {
  blogPost: BlogPost
}

function Post({ blogPost }: PropsBlogPost) {
  const { user: userLogged } = useContext(GlobalContext);
  const isOwnerPost = userLogged.id === blogPost.user.id;

  const { title, content, created, user, image } = blogPost;
  const userImage = user.image === undefined ? user.image : '../abstract-user.svg';
  
  return (
    <article className="bg-white rounded-lg p-5 mb-3">
      <div className="flex">
        <img className="h-10 mr-3" src={userImage} alt="profile-user" />
        <div>
          <p className="font-serif">{user.name}</p>
          <p className="font-extralight text-xs">Postado em:{created.toLowerCase()}</p>
        </div>
      </div>
      <h2 className="font-extrabold">{title}</h2>
      <p className="text-center font-sans">{content}</p>
      { image !== '' ? <img className="w-full" src={image} alt="post" /> : null}
      <div className="flex justify-end gap-2">
        {isOwnerPost ? <button className="bg-red text-white p-2 rounded-lg mt-3">Excluir</button> : null}
        {isOwnerPost ? <button className="bg-blue-500 text-white p-2 rounded-lg mt-3">Editar</button> : null}
      </div>
    </article>
  );
}

export default Post;