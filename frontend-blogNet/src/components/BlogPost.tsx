function BlogPost() {
  return (
    <article className="w-80 bg-white rounded-lg p-5 mb-3">
      <div className="flex">
        <img className="h-10 mr-3" src="./abstract-user.svg" alt="profile-user" />
        <div>
          <p className="font-serif">Nome do usuário</p>
          <p className="font-extralight">Postado em:</p>
        </div>
      </div>
      <h2 className="font-extrabold">Titulo do post</h2>
      <p className="text-center font-sans ">Postagem</p>
    </article>
  );
}

export default BlogPost;