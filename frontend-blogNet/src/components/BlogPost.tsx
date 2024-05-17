import { BlogPost } from "../types/blogPost";

type PropsBlogPost = {
  blogPost: BlogPost
}

function Post({ blogPost }: PropsBlogPost) {
  const { title, content, created, user } = blogPost;
  return (
    <article className="w-80 bg-white rounded-lg p-5 mb-3">
      <div className="flex">
        <img className="h-10 mr-3" src={user.image} alt="profile-user" />
        <div>
          <p className="font-serif">{user.name}</p>
          <p className="font-extralight">Postado em:{created.toLowerCase()}</p>
        </div>
      </div>
      <h2 className="font-extrabold">{title}</h2>
      <p className="text-center font-sans ">{content}</p>
    </article>
  );
}

export default Post;