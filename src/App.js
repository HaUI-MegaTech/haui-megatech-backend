import logo from './logo.svg';
import './App.css';
import Header from './layouts/Header';
import Sidebar from './layouts/Sidebar';
import Footer from './layouts/Footer';
import Blank from './pages/Blank';
import { Navigate, Route, Routes } from 'react-router-dom';
import ActiveUsers from './pages/users/ActiveUsers';
import DeletedUsers from './pages/users/DeletedUsers';
import UsersStatistic from './pages/users/UsersStatistic';
import UsersHistory from './pages/users/UsersHistory';
import Home from './pages/home/Home';

function App() {
  return (
    <>
      <Header />
      <Sidebar />
      <Routes>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/' element={<Navigate to='/home' />}></Route>
        <Route path='/users/active' element={<ActiveUsers />}></Route>
        <Route path='/users/deleted' element={<DeletedUsers />}></Route>
        <Route path='/users/statistic' element={<UsersStatistic />}></Route>
        <Route path='/users/history' element={<UsersHistory />}></Route>
        <Route path='/products/active' element={<Blank />}></Route>
        <Route path='/products/deleted' element={<Blank />}></Route>
        <Route path='/products/statistic' element={<Blank />}></Route>
        <Route path='/products/history' element={<Blank />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
