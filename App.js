import logo from './logo.svg';
import './App.css';
import Header from './layouts/Header';
import Sidebar from './layouts/Sidebar';
import Footer from './layouts/Footer';
import Blank from './pages/Blank';

function App() {
  return (
    <>
      <Header />
      <Sidebar />
      <Blank />
      <Footer />
    </>
  );
}

export default App;
