import { Route, Routes } from 'react-router-dom';
import Layout from './components/UI/Layout';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Rodo from './pages/Rodo';
import Specializations from './pages/Specializations';

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Specializations />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/rodo" element={<Rodo />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
