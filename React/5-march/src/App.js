import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout/Layout.jsx';
import Home from './pages/Home/Home.jsx';
import Career from './pages/Career/Career.jsx';
import Contact from './pages/Contact/Contact.jsx';
import Community from './pages/Community/Community.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={< Layout />}>
          <Route index element={< Home/>} />
          <Route path="career" element={< Career/>} />
          <Route path="contact" element={< Contact/>} />
          <Route path="community" element={< Community/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
