import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import WrongURL from "./Pages/WrongURL";
import Designs from "./Pages/Designs";
import Design from "./Pages/Design";
import Contact from "./Pages/Contact";
import Navigation from "./Components/Navigation";
import Footer from "./Components/Footer";
import Mary from "./Designs/Mary";

export default function App() {
  const designItems = [
    {
      id: 1,
      preview: "/design/mary",
      title: "Mary's Fashion Store",
      image: "src/assets/mary's design.png",
    },
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="*" element={<WrongURL />} />
          <Route
            exact
            path="/designs"
            element={<Designs designItems={designItems} />}
          />
          <Route
            exact
            path="/design/:id"
            element={<Design designItems={designItems} />}
          />
          <Route exact path="/design/mary" element={<Mary />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
