import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"; // Fa6 includes the X icon (formerly Twitter)
import { Link } from "react-router-dom";

function Footer() {
  return (
    <section className="py-14  px-5 border-t border-customGray/40 mt--4 bg-black text-white">
      <div className="flex flex-col lg:flex-row items-center h-full ">
        <div className="flex items-center h-[65px]">
          <div
            href="/"
            className="tracking-wider lora-heading capitalize text-3xl md:text-4xl h-[90%] md:h-full w-[90px] relative"
          >
            <img
              src="/prisy's logo.jpg"
              className="absolute w-full h-full object-contain rounded-full"
              alt="Logo"
            />
          </div>
        </div>

        <section
          className={`grow items-center flex flex-col lg:flex-row ease-in-out duration-200  
h-auto gap-10 lg:gap-0
 bg-customBlack w-full`}
        >
          <div className="flex flex-col text-sm lg:ml-7 text-center mt-5 lg:mt-0 lg:text-start">
            <p className="text-white/70">Mon - Sun</p>
            <p>09:00 - 16:00</p>
          </div>

          <nav className="mx-auto">
            <ul className="flex gap-4 lg:gap-12 flex-col lg:flex-row text-center lg:text-start">
              <li>
                <div
                  className={`py-1 ease-in-out duration-100 hover:border-white`}
                >
                  <Link to="/">Home</Link>
                </div>
              </li>
              <li>
                <div
                  className={`py-1  ease-in-out duration-100 hover:border-white`}
                >
                  <Link to="/menu">Menu</Link>
                </div>
              </li>
              <li>
                <div
                  className={`py-1  ease-in-out duration-100 hover:border-white`}
                >
                  <Link to="/contact">Contacts</Link>
                </div>
              </li>
            </ul>
          </nav>

          <a
            href={`tel:"2347036213932"`}
            className="flex gap-3 items-center tracking-wider text-white"
          >
            07036213932
          </a>

          <button
            className="p-2 px-4 bg-orange-400 text-black tracking-wide md:ml-7"
            onClick={() =>
              (window.location.href = `https://wa.me/"2347036213932"`)
            }
          >
            Order Now
          </button>
        </section>
      </div>

      <div className="max-w-sm mx-auto border-t mt-16 py-5">
        <section className="flex justify-center gap-4 border-customGray/40">
          <a
            href="https://www.instagram.com/priscys_kitchen/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={26} />
          </a>

          <a
            href="https://web.facebook.com/profile.php?id=100077447829457"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF size={26} />
          </a>

          <a
            href="https://x.com/priscys_kitchen"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaXTwitter size={26} />
          </a>
        </section>

        <p className="text-customGray text-center mt-8">©all rights reserved</p>
      </div>
    </section>
  );
}

export default Footer;
