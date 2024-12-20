import "./styles.css";
import { useNavigate } from "react-router-dom";

function Hero() {
  const handleWhatsappOrderClick = (phone) => {
    window.open(`https://wa.me/${phone}`, "_blank");
  };

  const navigateToMenu = () => {
    window.location.href = "/menu";
  };

  return (
    <div className="relative max-h-[calc(100vh-65px)] md:h-[90vh]">
      <img
        src="/About us.jpg"
        className="absolute inset-0 w-full h-full object-cover"
        alt="Food in Lagos"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent"></div>

      <div className="relative z-10 flex items-end h-full">
        <div className="container mx-auto px-6 md:px-16 py-20">
          <article className="md:max-w-[60%] space-y-5 text-white">
            <h1 className="text-3xl md:text-5xl font-bold md:leading-[3.5rem]">
              We sell HAPPINESS
              <br /> not just FOOD.
              <br />
              Irresistibly tasty! 😋
            </h1>

            <p className="text-gray-300 text-lg animate-fadeInUp">
              Your favourite food plug in Abuja, Nigeria
            </p>

            <div className="flex gap-4 animate-fadeInUp">
              <button
                className="px-5 py-3 bg-orange-300 text-black rounded-lg shadow-md hover:shadow-xl ease-in-out duration-200"
                onClick={() => handleWhatsappOrderClick("2347036213932")}
              >
                Order Now
              </button>
              <button
                onClick={navigateToMenu}
                className="px-5 py-3 border border-orange-300 text-orange-300 rounded-lg hover:bg-orange-300 hover:text-black ease-in-out duration-200"
              >
                See our Menu
              </button>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}

export default Hero;
