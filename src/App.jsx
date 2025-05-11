import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import WrongURL from "./Pages/WrongURL";
import Designs from "./Pages/Designs";
import Contact from "./Pages/Contact";
import Navigation from "./Components/Navigation";
import Footer from "./Components/Footer";
import Mary from "./Designs/Mary";
import Delivery from "./Designs/Delivery";

export default function App() {
  const designItems = [
    {
      id: 1,
      preview: "/design/mary",
      title: "Mary's Fashion Store",
      image: "src/assets/mary's design.png",
    },
    {
      id: 2,
      preview: "/design/delivery",
      title: "Mr. OTC Delivery Flyer",
      image: "src/assets/nana delivery.jpg",
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
          <Route exact path="/design/mary" element={<Mary />} />
          <Route exact path="/design/delivery" element={<Delivery />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
