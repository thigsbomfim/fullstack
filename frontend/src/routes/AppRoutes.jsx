import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './Home';
import { Contact } from './Contact';
import { Footer } from '../components/Footer';
import { Nav } from '../components/Nav';

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
