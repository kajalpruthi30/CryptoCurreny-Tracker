import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/Common/Header"
import HomePage from "./pages/Home"
import DashboardPage from "./pages/Dashboard"
import CoinPage from "./pages/Coin"
import ComparePage from "./pages/Compare"


function App() {

  return (
    <div>
      <BrowserRouter>
        <Header/>
          <Routes>
            <Route path ='/' element={<HomePage/>} />
            <Route path ='/dashboard' element={<DashboardPage/>} />
            {/* <Route path ='/coin/:id' element={<CoinPage/>} /> */}
            <Route path ='/compare' element={<ComparePage/>} />
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
