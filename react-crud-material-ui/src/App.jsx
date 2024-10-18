import Header from './components/Header'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from './components/Home'
import Edit from './components/Edit'
import Add from './components/Add'

function App() {
  return (
    <>
      <Header />
      <Router>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<Add />} />
          <Route path="/edit" element={<Edit />} />

        </Routes>

      </Router>

    </>
  )
}
export default App