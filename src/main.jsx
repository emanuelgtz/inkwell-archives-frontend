import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Home from './pages/Home';



createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    {/* <App />  */}
    <Home />
  </ BrowserRouter>
)