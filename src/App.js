import Navbar from './components/Navbar';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import { ThemeProvider } from './context/ThemeContext';
import Spinner from './components/Spinner';
import { useEffect, useState } from 'react';


function App() {
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false)
    }, 1800)
  }, [])
  return (
    <>
      <ThemeProvider>
        {loading ? (<div className='w-sceen h-screen flex items-center justify-center'><Spinner size={90} /></div>) : (
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />}>
              </Route>
            </Routes>
          </BrowserRouter>
        )}
      </ThemeProvider>

    </>
  );
}

export default App;
