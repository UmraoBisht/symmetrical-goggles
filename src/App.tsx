/**
 * @copyright 2024 Umrao Bisht
 * @license Apache-2.0
*/


/** 
 * Import Components 
 */
import { BrowserRouter, Route, Routes } from "react-router"
import Layout from "./Layout"
import Header from "./components/Header"



function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Layout />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App