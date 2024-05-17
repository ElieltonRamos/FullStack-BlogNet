import { useState } from "react";
import { imageToBase64 } from "../services/convertImage";

function CreatePost() {
  const [newPost, setNewPost] = useState({
    title: "",
    content: "",
    image: ""
  });

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.name
    const value = e.target.value
    const image = e.target.files;
    if (image !== null) {
      const file = image[0]
      const reader = new FileReader();
      reader.onload = function(e: ProgressEvent<FileReader>) {
        // O resultado é uma URL base64 da imagem
        if (e.target === null) return;
        if (e.target.result === null) return;
        if (e.target.result instanceof ArrayBuffer) return;
        const base64String = e.target.result;

        // Converter a URL base64 para um Blob
        const byteString = atob(base64String.split(',')[1]);
        const mimeString = base64String.split(',')[0].split(':')[1].split(';')[0];

        const ab = new ArrayBuffer(byteString.length);
        const ia = new Uint8Array(ab);

        for (let i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
        }

        const blob = new Blob([ab], { type: mimeString });

        console.log('Blob:', blob);
    };
    reader.readAsDataURL(file);
    const a = reader
    console.log(a, 'a');
    }
    // const base64 = await imageToBase64();
    // console.log(base64);
    setNewPost({ ...newPost, [input]: value });
  };

  return (
    <form className="w-80 bg-white rounded-lg p-5 mb-3">
      <input
        type="text"
        name="title"
        placeholder="Título"
        className="w-full mb-3 p-2 rounded-lg border border-gray-300"
        value={newPost.title}
        onChange={handleChange}
      />
      <input
        type="text"
        name="content"
        placeholder="Conteúdo"
        className="w-full mb-3 p-2 rounded-lg border border-gray-300"
        value={newPost.content}
        onChange={handleChange}
      />
      <input
        name="image"
        type="file"
        className="w-full mb-3 p-2 rounded-lg border border-gray-300"
        onChange={handleChange}
      />
      <button
        type="submit"
        className="w-full bg-blue-500 text-white p-2 rounded-lg"
      >
        Publicar
      </button>
  </form>
  )
}

export default CreatePost;