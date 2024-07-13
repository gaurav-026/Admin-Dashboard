import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import MainPage from './components/MainPage';
import User from './components/User';
import Posts from './components/Posts';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/dashboard' element={<MainPage />} />
        <Route path='/users' element={<User />} />
        <Route path='/posts' element={<Posts />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
