import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignInPage from './perspective/SignInPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<SignInPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
