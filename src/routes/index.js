import { Routes as RouterRoutes, Route, useLocation } from 'react-router-dom';
import Home from '../components/Pages/Home';
import Repositories from '../components/Pages/Repositories';
import Contact from '../components/Pages/Contact';
import { PageTransition } from '../components/common/PageTransition';

export const Routes = () => {
  const location = useLocation();

  return (
    <PageTransition>
      <RouterRoutes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/repositories" element={<Repositories />} />
        <Route path="/contact" element={<Contact />} />
      </RouterRoutes>
    </PageTransition>
  );
}; 