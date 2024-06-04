import { Route, Routes, useLocation, useNavigate } from "react-router-dom"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Home from "./pages/Home"
import { GlobalStateProvider } from "./context/globalContext"
import Profile from "./pages/Profile"
import { useEffect } from "react"

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token && location.pathname !== '/register') return navigate('/');
  }, [navigate, location.pathname]);

  return (
    <GlobalStateProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </GlobalStateProvider>
  )
}

export default App
