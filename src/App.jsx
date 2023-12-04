import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import MainLayout from './Layout/MainLayout';
import Posts from './pages/Posts';
import SinglePost from './components/SinglePost/SinglePost';
import About from './pages/About';
import Login from './pages/Login';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="login" element={<Login />} />
            <Route path="posts" element={<Posts />} />
            <Route path="about" element={<About />} />
            <Route path="posts/:postId" element={<SinglePost />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
