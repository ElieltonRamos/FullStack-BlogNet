import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Loading from "../components/Loading";
import { requestRegister } from "../services/requests";

function Register() {
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
    console.log(form);
    setLoading(false);
    if (typeof response === 'string') return setErrorMsg('Erro de rede');
    if ('message' in response.data) return setErrorMsg(response.data.message);
    localStorage.setItem('token', response.data.token);
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
        {loading ? <Loading /> : 'Sign up'}
        </button>
      </form>

      <button
        onClick={() => navigate('/')}
        type="button"
        className=" mt-4 flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto dark:hover:bg-gray-800 dark:bg-gray-600 hover:bg-gray-100 dark:text-gray-200"
      >
        <svg className="w-5 h-5 rtl:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
        </svg>
        <span>Go back</span>
      </button>

    </main>
  )
}

export default Register;
