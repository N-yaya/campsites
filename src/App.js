import Header from './components/Header';
import CampsiteDetailPage from './pages/CampsiteDetailPage';
import {Routes, Route} from 'react-router-dom';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import CampsitesDirectoryPage from './pages/CampsitesDirectoryPage';
import AboutPage from './pages/AboutPage';
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
            <Route path='about' element={<AboutPage/>}/>
            <Route
                    path='directory/:campsiteId'
                    element={<CampsiteDetailPage />}
                />
         </Routes>
      <Footer/>
    </div>
  );
}

export default App;
