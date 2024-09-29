import Nav from "./components/Nav/index.jsx"
import Footer from "./components/Footer/index.jsx"
import { Outlet } from "react-router-dom"


function App() {

  return (
    <>
      <Nav/>

      <Outlet/>

      <Footer/>
    </>
  )
}

export default App
