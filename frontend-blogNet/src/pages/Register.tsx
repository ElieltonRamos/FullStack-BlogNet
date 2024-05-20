import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import LoadingSmall from "../components/loadings/LoadingSmall";
import { requestRegister } from "../services/requests";
import ButtonReturn from "../components/buttons/ButtonReturn";
import { GlobalContext } from "../context/globalContext";
import { getUser } from "../services/utils";

function Register() {
  const { user, setUser } = useContext(GlobalContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const response = await requestRegister(form);
    setLoading(false);
    if (typeof response === 'string') return setErrorMsg('Erro de rede');
    if ('message' in response.data) return setErrorMsg(response.data.message);
    localStorage.setItem('token', response.data.token);
    if (user.name === '') getUser(response.data.token, setUser);
    setErrorMsg('');
    navigate('/home');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }

  return (
    <main className="w-screen h-screen bg-gray-200 flex items-center justify-center flex-col">

      <h1 className="text-blue-800 font-bold text-5xl">Login Social</h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-4 w-380 rounded-md flex justify-center items-center flex-col shadow-lg mt-4"
      >
        <h2 className="text-black font-bold text-4xl">Sign up</h2>
        <hr className="w-full my-4 border-8" />

        <input className="input-login" onChange={handleChange} name="name" type="text" placeholder="Name" />
        <input className="input-login" onChange={handleChange} name="email" type="email" placeholder="E-mail" />
        <input className="input-login" onChange={handleChange} name="password" type="password" placeholder="Password" />

        <p className="text-red text-sm">{errorMsg}</p>
        <button
          className="h-12 w-full bg-blue-600 rounded-md text-white dark:hover:bg-blue-700"
          type="submit"
          disabled={loading}
        >
          {loading ? <LoadingSmall /> : 'Sign up'}
        </button>
      </form>

      <ButtonReturn onClick={() => navigate('/')} />

    </main>
  )
}

export default Register;
