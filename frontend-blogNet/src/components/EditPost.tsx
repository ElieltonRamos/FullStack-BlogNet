import { BlogPost } from "../types/blogPost";

type PropEditPost = {
  post: BlogPost;
}

function EditPost({ post }: PropEditPost) {
  return (
    <div>
      <h1>Edit Post</h1>
    </div>
  );
}

export default EditPost;