import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { requestLogin } from "../services/requests";
import { UserLogin } from "../types/user";
import Loading from "../components/loadings/LoadingSmall";
import { GlobalContext } from "../context/globalContext";

function Login() {
  const { setToken } = useContext(GlobalContext);
  const [form, setForm] = useState<UserLogin>({ email: '', password: '' });
  const [errorMsg, setErrorMsg] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const tokenStorage = localStorage.getItem("token");
    if (tokenStorage) {
      setToken(tokenStorage);
      navigate('/home');
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const response = await requestLogin(form)
    setLoading(false);
    if (typeof response === 'string') return setErrorMsg('Erro de rede');
    if ('message' in response.data) return setErrorMsg(response.data.message);
    localStorage.setItem('token', response.data.token);
    setToken(response.data.token);
    setErrorMsg('');
    navigate('/home');
  }

  return (
    <main className="w-screen h-screen bg-gray-200 flex items-center justify-center flex-col md:flex-row">

      <section className="w-580 pr-8 text-center md:text-left">
        <h1 className="text-blue-800 font-bold text-5xl">Login Social</h1>
        <h2 className="text-3xl text-black">Conecte-se com as pessoas que fazem parte da sua vida</h2>
      </section>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-4 w-380 rounded-md flex justify-center items-center flex-col shadow-lg mt-4"
      >

        <input
          onChange={handleChange}
          className="input-login"
          type="email"
          name="email"
          placeholder="E-mail"
        />
        <input
          onChange={handleChange}
          className="input-login"
          type="password"
          name="password"
          placeholder="Senha"
        />

        <button
          className="h-12 w-full bg-blue-600 rounded-md text-white"
          type="submit"
          disabled={loading}
        >
          {loading ? <Loading /> : 'Entrar'}
        </button>
        <p className="text-red font-light text-sm mt-2">{errorMsg}</p>

        <hr className="w-full my-4 border-5" />

        <button
          onClick={() => navigate('/register')}
          className="bg-green-600 rounded-md text-white px-5 h-12"
          type="button"
        >
          Criar Nova Conta
        </button>

      </form>

    </main>
  )
}

export default Login;