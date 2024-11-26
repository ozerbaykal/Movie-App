import { Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Home from "./Pages/Home"
import MovieDetail from "./Pages/MovieDetail"
import FavoriteList from "./Pages/FavoriteList"

const App = () => {
  return (
    <div className="h-screen bg-black text-white p-4">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail" element={<MovieDetail />} />
        <Route path="/my-list" element={<FavoriteList />} />
      </Routes>
    </div>
  )
}

export default App 