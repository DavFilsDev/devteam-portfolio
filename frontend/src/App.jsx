import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/public/HomPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* Add other routes later */}
        </Routes>
    </BrowserRouter>
  );
}

export default App;