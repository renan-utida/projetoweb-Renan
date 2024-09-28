import Nav from "./components/Nav/index.jsx"
import Footer from "./components/Footer"
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
