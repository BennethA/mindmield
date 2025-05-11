import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();
  return (
    <div className="fixed top-0 w-full h-20 text-white font-bold flex items-center justify-center z-[100000]">
      <div className="bg-white/10 backdrop-blur-lg px-6 py-2 rounded-full shadow-lg flex gap-4 items-center h-[70%]">
        {["Home", "Designs", "Contact"].map((name, idx) => (
          <Link
            key={idx}
            className={`${
              location.pathname === `/${name.toLocaleLowerCase()}` &&
              "bg-[#ffffff2f]"
            } ${
              location.pathname === `/` && name === "Home" && "bg-[#ffffff2f]"
            } px-4 py-2 rounded-full hover:bg-[#ffffff2f] active:bg-[#ffffff2f] transition`}
            to={`/${name.toLowerCase()}`}
          >
            {name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navigation;
