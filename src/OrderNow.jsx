// function OrderNow() {
//   return (
//     <div className="bg-black text-white py-10 px-5 md:px-20">
//       <h2 className="lora-heading text-2xl sm:text-4xl tracking-wider text-center text-white">
//         Order Now!
//       </h2>
//       <div className="grid grid-cols-1 md:grid-cols-[1fr,40%] gap-10">
//         {/* Contact Details */}
//         <div className="flex flex-col gap-5">
//           <div>
//             <h3 className="text-customGray text-sm">Whatsapp</h3>
//             <a
//               href="https://wa.me/09027952083"
//               className="lora-heading
//             text-2xl flex gap-3 items-center "
//             >
//               09027952083 ↗
//             </a>
//           </div>
//           <div>
//             <h3 className="text-customGray text-sm">Email</h3>
//             <a
//               href="mailto:lusciouschow.ng@gmail.com"
//               className="lora-heading text-2xl"
//             >
//               lusciouschow.ng@gmail.com
//             </a>
//           </div>
//           <div>
//             <h3 className="text-customGray text-sm">Opening Hours</h3>
//             <p className="lora-heading text-2xl">
//               Monday to Sunday <br />
//               09:00 - 16:00
//             </p>
//           </div>
//         </div>

//         {/* Image */}
//         <div className="rounded-lg overflow-hidden flex justify-center">
//           <img
//             src="/public/Rice and vegetable stew.jpg"
//             alt="Delicious chicken dish"
//             className="object-cover w-full h-auto rounded-md"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default OrderNow;

import React, { useState, useEffect } from "react";

const OrderNow = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "/Afang soup.jpg",
    "/Egusi soup.jpg",
    "/okro-soup.jpeg",
    "/Spaghetti.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black text-white py-10 px-5 md:px-20">
      <h2 className="lora-heading text-2xl sm:text-4xl tracking-wider text-center text-white mb-10">
        Order Now!
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-[1fr,40%] gap-10 items-center">
        {/* Contact Details */}
        <div className="flex flex-col gap-5 justify-center items-center md:items-start">
          <div className="text-center md:text-left">
            <h3 className="text-customGray text-sm">Whatsapp</h3>
            <a
              href="https://wa.me/2347036213932"
              className="lora-heading text-2xl flex gap-3 items-center hover:text-gray-300 transition-colors"
            >
              07036213932 ↗
            </a>
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-customGray text-sm">Email</h3>
            <a
              href="mailto:lusciouschow.ng@gmail.com"
              className="lora-heading text-2xl hover:text-gray-300 transition-colors"
            >
              priscyskitchen@gmail.com
            </a>
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-customGray text-sm">Opening Hours</h3>
            <p className="lora-heading text-2xl">
              Monday to Sunday <br />
              09:00 - 16:00
            </p>
          </div>
        </div>

        {/* Image */}
        <div className="rounded-lg overflow-hidden h-64 md:h-80">
          <img
            src={images[currentImageIndex]}
            alt="Featured dish"
            className="w-full h-full object-cover rounded-md transition-opacity duration-500"
          />
        </div>
      </div>
    </div>
  );
};

export default OrderNow;
