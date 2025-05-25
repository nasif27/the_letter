import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';

export default function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home/>} path="/" />
      </Routes>
    </BrowserRouter>
  );
}