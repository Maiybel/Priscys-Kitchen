// import { Link } from "react-router-dom";

// const Navbar = () => {
//   const businessPhone = "2347036213932";

//   return (
//     <header className="px-5 md:px-7 md:py-1 bg-[#fdeccf] text-customBlack items-center sticky top-0 z-[100]">
//       <div className="flex items-center h-[65px]">
//         <Link to="/">
//           <img
//             src="/prisy's logo.jpg"
//             alt="logo"
//             className="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover mr-4"
//           />
//         </Link>

//         <section className="grow items-center absolute top-[100%] flex md:static flex-col md:flex-row ease-in-out duration-200 gap-8 md:gap-0 overflow-hidden bg-[#fdeccf]/[95] w-full left-0">
//           <div className="flex flex-col text-sm md:ml-7 text-center mt-5 md:mt-0 md:text-start">
//             <p className="text-customBlack/70">Mon - Sun</p>
//             <p>09:00 - 16:00</p>
//           </div>

//           <nav className="mx-auto">
//             <ul className="flex gap-8 md:gap-12 flex-col md:flex-row text-center md:text-start">
//               <li className="py-1 border-b ease-in-out duration-100 hover:border-customBlack">
//                 <Link to="/">Home</Link>
//               </li>
//               <li className="py-1 border-b ease-in-out duration-100 hover:border-customBlack">
//                 <Link to="/menu">Menu</Link>
//               </li>
//               <li className="py-1 border-b ease-in-out duration-100 hover:border-customBlack">
//                 <Link to="/contact">Contacts</Link>
//               </li>
//             </ul>
//           </nav>

//           <a
//             href={`tel:${businessPhone}`}
//             className="flex gap-3 items-center tracking-wider text-customBlack"
//           >
//             07036213932
//           </a>
//           <button
//             className="p-2 px-4 bg-black text-white tracking-wide md:ml-7"
//             onClick={() =>
//               (window.location.href = `https://wa.me/${businessPhone}`)
//             }
//           >
//             Order Now
//           </button>
//         </section>
//       </div>
//     </header>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const businessPhone = "2348167853001";

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="px-5 md:px-7 md:py-1 bg-orange-400 text-customBlack sticky top-0 z-[100]">
      <div className="flex items-center h-[65px]">
        <Link to="/">
          <img
            src="/prisy's logo.jpg"
            alt="logo"
            className="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover mr-4"
          />
        </Link>

        {/* Hamburger Menu Button */}
        <button
          className="ml-auto md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Navigation Section */}
        <section
          className={`
          grow items-center absolute top-[100%] flex md:static flex-col md:flex-row 
          ease-in-out duration-200 gap-8 md:gap-0 overflow-hidden bg-orange-400/[95] 
          w-full left-0 md:h-auto
          ${isMenuOpen ? "h-[calc(100vh-65px)] py-5" : "h-0 md:h-auto"}
        `}
        >
          <div className="flex flex-col text-sm md:ml-7 text-center mt-5 md:mt-0 md:text-start">
            <p className="text-customBlack/70">Mon - Sun</p>
            <p>09:00 - 16:00</p>
          </div>

          <nav className="mx-auto">
            <ul className="flex gap-8 md:gap-12 flex-col md:flex-row text-center md:text-start">
              <li className="py-1 border-b ease-in-out duration-100 hover:border-customBlack">
                <Link to="/" onClick={() => setIsMenuOpen(false)}>
                  Home
                </Link>
              </li>
              <li className="py-1 border-b ease-in-out duration-100 hover:border-customBlack">
                <Link to="/menu" onClick={() => setIsMenuOpen(false)}>
                  Menu
                </Link>
              </li>
              <li className="py-1 border-b ease-in-out duration-100 hover:border-customBlack">
                <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                  Contacts
                </Link>
              </li>
            </ul>
          </nav>

          <div className="flex flex-col md:flex-row items-center gap-4">
            <a
              href={`tel:${businessPhone}`}
              className="flex gap-3 items-center tracking-wider text-customBlack"
            >
              07036213932
            </a>
            <button
              className="p-2 px-4 bg-black text-white tracking-wide md:ml-7"
              onClick={() => {
                window.location.href = `https://wa.me/${businessPhone}`;
                setIsMenuOpen(false);
              }}
            >
              Order Now
            </button>
          </div>
        </section>
      </div>
    </header>
  );
};

export default Navbar;
