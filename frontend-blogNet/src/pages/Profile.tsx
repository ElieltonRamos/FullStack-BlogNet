import { useEffect, useState } from "react";
import CreatePost from "../components/CreatePost";
import Navbar from "../components/navBar";
import { EditUser, ViewUser } from "../components/EditUser";
import BlogPostView from "../components/BlogPost";
import { BlogPost } from "../types/blogPost";
import { requestBlogPosts } from "../services/requests";
import { alertNoLogged, alertNoNetwork } from "../services/alerts";
import LoadingMid from "../components/loadings/LoadingMid";

function Profile() {
  const [editUser, setEditUser] = useState(false);
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem('token') || '';
  const sorted = true

  const viewPost = posts.length === 0 
    ? <h2 className="text-gray-500 font-semibold text-center">Oops, parece que voce ainda não postou</h2> 
    : posts.map((post) => <BlogPostView key={post.id} blogPost={post} />)

  useEffect(() => {
    requestBlogPosts(token, sorted, true).then((response) => {
      if (response === 'error network') return alertNoNetwork();
      if (response.status !== 200) return alertNoLogged();
      setPosts(response.data);
      setLoading(false);
    });
  }, [sorted, token]);

  return (
    <main className="w-screen h-screen bg-gray-200 flex items-center justify-center flex-col overflow-auto">
      <Navbar />
      <div className="w-full bg-gray-200 mb-40"></div>
      <div className="bg-gray-200 w-screen text-center fixed top-11">
          <h2 className="text-blue-600 text-4xl font-bold ">Profile</h2>
      </div>
      <section className="h-full w-11/12 flex flex-col justify-center md:flex-row">
        {editUser ? <EditUser setEditUser={setEditUser} /> : <ViewUser setEditUser={setEditUser} />}
        <div className="mt-80 md:mt-10">
          <CreatePost />
          <div>
            <h2 className="text-blue-600 text-xl font-bold text-center">Seus Posts</h2>
            {loading ? <><LoadingMid /><LoadingMid /></> : viewPost}
          </div>
        </div>
      </section>
    </main>
  )
}

export default Profile;