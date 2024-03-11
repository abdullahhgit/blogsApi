import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BlogDetail from './pages/BlogDetail';
import Blogs from './pages/Blogs';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/blogs' element={<Blogs />} />
          <Route path='/blogs/:id' element={<BlogDetail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
