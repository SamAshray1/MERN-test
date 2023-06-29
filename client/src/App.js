import './App.css';
import Layout from './Layout';
import { BrowserRouter, Route, Routes, Switch } from 'react-router-dom';
import BlogPage from './pages/BlogPage';
import IndexPage from './pages/IndexPage';
import PostPage from './pages/PostPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route index element={<IndexPage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/post/:id" element={<PostPage />} />
      </Route>
    </Routes>
  );
}

export default App;
