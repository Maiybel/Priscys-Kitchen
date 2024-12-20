import React from "react";

const About = () => {
  return (
    <div className="bg-black py-10 px-4 md:px-8 lg:px-16">
      <h3 className="lora-heading text-2xl sm:text-4xl tracking-wider text-center text-white mb-8 md:mb-12">
        About Us
      </h3>

      <section className="max-w-6xl mx-auto grid grid-cols-1 gap-8 md:gap-12 md:grid-cols-[40%,1fr] items-center">
        {/* Logo Container */}
        <div className="flex justify-center md:justify-start">
          <div className="relative w-52 h-52 md:w-64 md:h-64 lg:w-72 lg:h-72">
            <img
              src="/prisy's logo.jpg"
              alt="Priscy's logo"
              className="object-cover rounded-full w-full h-full shadow-lg"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="flex items-center">
          <p className="text-white tracking-wide leading-relaxed text-base md:text-lg text-center md:text-left">
            Welcome to Priscy's Kitchen, your go-to destination for authentic
            Nigerian delicacies! Founded in 2020 by the talented chef Pricillia,
            our kitchen is dedicated to bringing the rich flavors of Nigerian
            local dishes right to your doorstep. At Priscys Kitchen, we
            specialize in crafting delicious soups and stews that capture the
            essence of traditional Nigerian cuisine. Pricillia's passion for
            cooking and her commitment to quality ensures that every dish is
            prepared with the freshest ingredients and utmost care.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
