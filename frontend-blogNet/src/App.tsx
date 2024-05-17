import { Route, Routes } from "react-router-dom"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Home from "./pages/Home"
import { GlobalStateProvider } from "./context/globalContext"

function App() {

  return (
    <GlobalStateProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </GlobalStateProvider>
  )
}

export default App
