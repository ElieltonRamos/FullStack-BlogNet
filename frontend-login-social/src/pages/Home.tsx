import { useContext, useEffect, useState } from "react";
import Post from "../components/BlogPost";
import { GlobalContext } from "../context/globalContext";
import { requestBlogPosts, requestUser } from "../services/requests";
import { alertNoLogged } from "../services/alerts";
import LoadingMid from "../components/loadings/LoadingMid";
import CreatePost from "../components/CreatePost";
import ToggleSimple from "../components/toggleSwitches/toggleSimple";
import NavBar from "../components/navBar";

function Home() {
  const { setUser, setBlogPosts, viewPosts, setViewPosts } = useContext(GlobalContext)
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState(false);

  useEffect(() => {
      requestBlogPosts(order).then(posts => {
      if ('message' in posts) return alertNoLogged();
      setBlogPosts(posts);
      setViewPosts(posts);
      setLoading(false);
      });

      requestUser().then(user => {
      if ('message' in user) return alertNoLogged();
      setUser(user);
      });

  }, [order, setBlogPosts, setUser, setViewPosts])

  return (
    <main className="w-screen h-screen bg-gray-200 flex items-center justify-center flex-col overflow-auto">
      <NavBar />
      <div className="w-full bg-gray-200 mb-40"></div>

      <div className="bg-gray-200 w-screen text-center fixed pt-[40px] z-10 top-[56px] flex flex-row justify-center">
          <h2 className="text-blue-600 text-xl font-bold ">Feeds and News</h2>
          <div className="flex ml-[20%]">
            <p className="text-[8px] translate-y-2 mr-1 text-slate-500 text-sm font-bold">most recent</p>
            <ToggleSimple checked={order} setChecked={setOrder} />
            <p className="text-[8px] translate-y-2 ml-1 text-slate-500 text-sm font-bold">most older</p>
          </div>
      </div>

      <section className="h-full mt-44 flex">
        <section>
          <CreatePost />
          {loading ? <><LoadingMid /><LoadingMid /><LoadingMid /></> :
            viewPosts.map(blogPost => (<Post key={blogPost.id} blogPost={blogPost} />))}
        </section>
      </section>
    </main>
  );
}

export default Home;