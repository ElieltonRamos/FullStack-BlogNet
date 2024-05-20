import { Route, Routes } from "react-router-dom"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Home from "./pages/Home"
import { GlobalStateProvider } from "./context/globalContext"
import Profile from "./pages/Profile"

function App() {

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
