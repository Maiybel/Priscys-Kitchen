import { useNavigate } from "react-router-dom";

function Dishes() {
  const navigate = useNavigate();

  return (
    <div className="bg-black py-10 px-4 sm:px-8 lg:px-16">
      <h3 className="lora-heading text-2xl sm:text-4xl tracking-wider text-center text-white">
        Featured Dishes
      </h3>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3 my-10">
        <Dish image="/Afang soup.jpg" heading="Afang Soup" />
        <Dish image="/Eforinro.jpg" heading="Eforinro" />
        <Dish image="/okro-soup.jpeg" heading="Okro Soup" />
      </div>
      <div className="flex justify-center">
        <button
          onClick={() => navigate("/menu")}
          className="border px-5 py-3 border-customGold hover:bg-customGold ease-in-out duration-150 text-customGold hover:text-customBlack text-white"
        >
          See Our Menu
        </button>
      </div>
    </div>
  );
}

function Dish(props) {
  return (
    <div className="relative h-48 md:h-auto md:aspect-square hover:scale-[1.1] ease-in-out duration-150">
      <img
        src={props.image}
        alt={props.heading}
        className="h-full w-full object-cover"
      />
      <p className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full text-center text-2xl capitalize bg-gradient-to-t from-black/60 to-transparent text-white py-3">
        {props.heading}
      </p>
    </div>
  );
}

export default Dishes;
