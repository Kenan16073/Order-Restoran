import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Layout } from "./components/Layout"
import { Add } from "./pages/Add"


function App() {


  return (
    <>
    <Router>
      <Routes>
          <Route element={<Layout/>}>
            <Route path="/add" element={<Add/>} />
          </Route>
      </Routes>
    </Router>
    </>
  )
}

export default App
