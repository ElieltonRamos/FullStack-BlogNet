import { BlogPost } from "../types/blogPost";

type PropsBlogPost = {
  blogPost: BlogPost
}

function Post({ blogPost }: PropsBlogPost) {
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
      <p className="text-center font-sans ">{content}</p>
      <img className="w-full h-38 object-cover rounded-lg" src={image} alt="post-image" />
    </article>
  );
}

export default Post;