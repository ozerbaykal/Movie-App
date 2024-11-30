import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header"
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Favorites from "./pages/Favorites";
import { FC } from "react";


const App: FC = () => {
  return (
    <BrowserRouter>



      <div className="min-h-screen bg-black text-white p-5 lg:p-10">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<Detail />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};



export default App 