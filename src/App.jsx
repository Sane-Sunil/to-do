import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from "./Header.jsx"
import Footer from "./Footer.jsx"
import Home from "./Home.jsx"
import Todo from "./Todo.jsx" 
import Error404 from "./Error404.jsx"

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="*" element={<Error404 />} />  
      </Routes>
      <Footer />
    </Router>
  );
}

export default App