import { useContext } from "react";
import Post from "../components/BlogPost";
import InputSearch from "../components/inputs/inputSearch";
import { BlogPostsContext } from "../context/blogPosts";

function Home() {
  const { blogPosts } = useContext(BlogPostsContext)
  return (
    <main className="w-screen h-screen bg-gray-200 flex items-center justify-center flex-col overflow-auto">
      <nav className="bg-white fixed top-0 h-14 w-[110vw] shadow-sm flex justify-around">
        <h1 className="text-blue-800 font-bold mt-3">Login Social</h1>
        <InputSearch />
        <img className="" src="./abstract-user.svg" alt="profile-user"/>
      </nav>
      <section className="h-full mt-44 flex">
        <h2 className="text-blue-600 text-xl bg-gray-200 w-96 font-bold mt-3 fixed top-11">Feeds and News</h2>
        <section className="">
          {blogPosts.map(blogPost => (
            <Post key={blogPost.id} blogPost={blogPost} />
          ))}
        </section>
      </section>
    </main>
  );
}

export default Home;