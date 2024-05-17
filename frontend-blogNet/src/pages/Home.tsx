import { useContext, useEffect, useState } from "react";
import Post from "../components/BlogPost";
import InputSearch from "../components/inputs/inputSearch";
import { GlobalContext } from "../context/globalContext";
import { requestBlogPosts } from "../services/requests";
import { alertNoLogged, alertNoNetwork } from "../services/alerts";
import LoadingMid from "../components/loadings/LoadingMid";
import CreatePost from "../components/CreatePost";

function Home() {
  const { token, blogPosts, setBlogPosts } = useContext(GlobalContext)
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const requestPosts = async () => {
      const posts = await requestBlogPosts(token);
      if (posts === 'error network') return alertNoNetwork();
      if (posts.status !== 200) return alertNoLogged();
      setBlogPosts(posts.data);
      setLoading(false);
    };
    requestPosts();
  }, [])

  return (
    <main className="w-screen h-screen bg-gray-200 flex items-center justify-center flex-col overflow-auto">
      <nav className="bg-white fixed top-0 h-14 w-[110vw] shadow-sm flex justify-around">
        <h1 className="text-blue-800 font-bold mt-3">Login Social</h1>
        <InputSearch />
        <img className="" src="./abstract-user.svg" alt="profile-user" />
      </nav>
      <section className="h-full mt-44 flex">
        <h2 className="text-blue-600 text-xl bg-gray-200 w-96 font-bold mt-3 fixed top-11">Feeds and News</h2>
        <section className="">
        <CreatePost />
          {loading ? <><LoadingMid /><LoadingMid /><LoadingMid /></> :
            blogPosts.map(blogPost => (<Post key={blogPost.id} blogPost={blogPost} />))}
        </section>
      </section>
    </main>
  );
}

export default Home;