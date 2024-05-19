import { useContext, useEffect, useState } from "react";
import Post from "../components/BlogPost";
import { GlobalContext } from "../context/globalContext";
import { requestBlogPosts, requestUser } from "../services/requests";
import { alertNoLogged, alertNoNetwork } from "../services/alerts";
import LoadingMid from "../components/loadings/LoadingMid";
import CreatePost from "../components/CreatePost";
import ToggleSimple from "../components/toggleSwitches/toggleSimple";
import NavBar from "../components/navBar";

function Home() {
  const { setUser, blogPosts, setBlogPosts } = useContext(GlobalContext)
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState(false);
  const token = localStorage.getItem('token') || '';

  useEffect(() => {
    const requestPosts = async () => {
      const posts = await requestBlogPosts(token, order);
      if (posts === 'error network') return alertNoNetwork();
      if (posts.status !== 200) return alertNoLogged();
      setBlogPosts(posts.data);
      setLoading(false);
    };
    const getUser = async () => {
      const user = await requestUser(token);
      if (user === 'error network') return alertNoNetwork();
      if (user.status !== 200) return alertNoLogged();
      setUser(user.data)
    };
    // getUser();
    requestPosts();
  }, [blogPosts, order, setBlogPosts, setUser, token])

  return (
    <main className="w-screen h-screen bg-gray-200 flex items-center justify-center flex-col overflow-auto">
      <NavBar />
      <section className="h-full mt-44 flex">
        <div className="bg-gray-200 w-full mt-3 fixed top-11 flex ">
          <h2 className="text-blue-600 text-xl font-bold">Feeds and News</h2>
          <div className="flex ml-[20%]">
            <p className="text-[8px] translate-y-2 mr-1 text-slate-500 text-sm font-bold">most recent</p>
            <ToggleSimple checked={order} setChecked={setOrder} />
            <p className="text-[8px] translate-y-2 ml-1 text-slate-500 text-sm font-bold">most older</p>
          </div>
        </div>
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