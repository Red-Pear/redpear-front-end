import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignInPage from './perspective/SignInPage';
import HomePage from './perspective/HomePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
