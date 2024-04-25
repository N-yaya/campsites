import Header from './components/Header';
import {Routes, Route} from 'react-router-dom';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import CampsitesDirectoryPage from './pages/CampsitesDirectoryPage'
import Footer from './components/Footer';
import './App.css';


function App() {
  
  return (
    <div className='App'>
      <Header/>
         <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='Contact' element={<ContactPage/>}/>
            <Route path='directory' element={<CampsitesDirectoryPage/>}/>
         </Routes>
      <Footer/>
    </div>
  );
}

export default App;
