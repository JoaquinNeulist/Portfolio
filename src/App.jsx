import React from 'react';
import { Routes, Route, Outlet, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Footer from './components/Footer';
import About from './pages/About';
import Navegationbar from './components/navegationbar';
import Project from './pages/Proyect';
import Contact from './pages/Contact';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navegationbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer className="mt-0" />
    </div>
  );
};

const App = () => {
  const location = useLocation();

  return (
    <div className="App">
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Project />} />
          <Route path='/contact' element={<Contact />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
