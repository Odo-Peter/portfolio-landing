import { Routes, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import Docs from './pages/Docs';
import DemoPage from './pages/Demo';

const App = () => {
  return (
    <main className="bg-gray-200 text-gray-900">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/docs" element={<Docs />} />
        <Route path="/demo" element={<DemoPage />} />
      </Routes>
    </main>
  );
};

export default App;
