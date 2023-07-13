import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { ThemeProvider } from "./context/ThemeContext";
import Spinner from "./components/Spinner";
import { useEffect, useState } from "react";
import { ProjectsProvider } from "./context/ProjectsContext";
import Test from "./pages/Test";
import Testimonial from "./pages/Testimonial";

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1800);
  }, []);
  return (
    <>
      <ProjectsProvider>
        <ThemeProvider>
          {loading ? (
            <div className="w-sceen h-screen flex items-center justify-center">
              <Spinner size={90} />
            </div>
          ) : (
            <BrowserRouter>
              <Navbar />
              <Routes>
                <Route path="/" element={<Home />}></Route>
                {/* <Route path="/test" element={<Test />}></Route> */}
                {/* <Route path="/testimonial" element={<Testimonial />}></Route> */}
              </Routes>
            </BrowserRouter>
          )}
        </ThemeProvider>
      </ProjectsProvider>
    </>
  );
}

export default App;
