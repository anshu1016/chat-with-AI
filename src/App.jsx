import { BrowserRouter as Router , Routes, Route } from "react-router-dom"
import "./index.scss"
import Chat from "./components/Chat/index"
function App() {
  

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/chat" element={<Chat/>}/>
        </Routes>
      </Router>
    
    </div>
  )
}

export default App
