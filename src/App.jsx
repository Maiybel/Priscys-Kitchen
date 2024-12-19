// import "./tailwind.css";
// import Navbar from "./Navbar";
// import Hero from "./Hero";
// import Dishes from "./Dishes";
// import About from "./About";
// import Menu from "./Menu";

// import OrderNow from "./OrderNow";
// import Footer from "./Footer";
// function App() {
//   return (
//     <div>
//       <Navbar />
//       <Hero />
//       <Dishes />
//       <About />
//       <Menu />
//       <OrderNow />
//       <Footer />
//     </div>
//   );
// }

// export default App;

import "./tailwind.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Dishes from "./Dishes";
import About from "./About";
import Menu from "./Menu";
import OrderNow from "./OrderNow";
import Footer from "./Footer";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Dishes />
                <About />
                <OrderNow />
              </>
            }
          />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<OrderNow />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
