import React, { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";
import { categories, products } from "./menuData";
import "swiper/css";
import "swiper/css/scrollbar";

function Menu() {
  const [currentSection, setCurrentSection] = useState("#soup");
  const [currentImage, setCurrentImage] = useState({
    url: categories[0].categoryImage.url,
    alt: categories[0].categoryImage.alt,
  });

  const divRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      let closestDiv = null;
      let closestDistance = window.innerHeight / 2;

      divRefs.current.forEach((ref) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          const distance = Math.abs(rect.top);
          if (distance < closestDistance) {
            closestDistance = distance;
            closestDiv = ref.id;
          }
        }
      });

      if (closestDiv) {
        setCurrentSection(`#${closestDiv}`);
        const closestProduct = products.find(
          (item) =>
            item.productCategory.categoryName.toLowerCase() === closestDiv
        );
        if (closestProduct) {
          setCurrentImage({
            url: closestProduct.productCategory.categoryImage.url,
            alt: closestProduct.productCategory.categoryImage.alt,
          });
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="grid grid-cols-1 lg:grid-cols-2 gap-2 relative bg-black">
      <section className="h-28 lg:h-[calc(100vh-65px)] sticky top-[65px] z-40">
        <div className="relative w-full h-full">
          <div className="absolute h-full w-full bg-gradient-to-b from-black/20 via-black/60 to-black z-10" />
          <img
            src={currentImage.url}
            alt={currentImage.alt}
            className="object-cover w-full h-full"
          />
          <div className="capitalize text-white z-20 text-3xl lg:text-5xl font-black flex items-end absolute h-full w-full p-10 lg:pb-14">
            {currentSection.substring(1)}
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-8 lg:px-5 pb-36">
        <nav className="w-full px-6 mt-6">
          <Swiper
            spaceBetween={30}
            slidesPerView="auto"
            freeMode={true}
            className="flex items-center justify-start h-[40px]"
            scrollbar={{
              draggable: false,
              hide: false,
            }}
            speed={1000}
            modules={[Scrollbar]}
          >
            {categories.map((item, index) => (
              <SwiperSlide key={index} style={{ width: "auto" }}>
                <a
                  href={`#${item.categoryName.toLowerCase()}`}
                  className="py-2.5 hover:text-yellow-500 capitalize text-white/70 text-lg ease-in-out duration-100"
                >
                  {item.categoryName}
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </nav>

        {categories.map((category, categoryIndex) => {
          const filteredProducts = products.filter(
            (product) =>
              product.productCategory.categoryName === category.categoryName
          );

          if (filteredProducts.length === 0) return null;

          return (
            <div
              ref={(el) => (divRefs.current[categoryIndex] = el)}
              className="flex flex-col my-9 w-full"
              id={category.categoryName.toLowerCase()}
              key={categoryIndex}
            >
              <header className="text-3xl capitalize text-center mb-3 text-orange-300">
                {category.categoryName}
              </header>
              <div className="flex flex-col gap-4 w-full text-white">
                {filteredProducts.map((product, productIndex) => (
                  <article
                    key={productIndex}
                    className="w-full flex flex-col md:flex-row p-5 gap-4 md:gap-24 lg:gap-0 rounded hover:bg-gray-950 cursor-pointer ease-in-out duration-100 group"
                  >
                    <div className="lg:w-0 w-full h-38 lg:h-0 group-hover:h-48 relative group-hover:w-full md:max-w-[180px] group-hover:md:min-h-[130px] group-hover:lg:h-auto duration-[600ms] ease-in-out shrink-0">
                      <img
                        src={product.productImage.url}
                        alt={product.productImage.alt}
                        className="object-cover rounded w-full h-full"
                      />
                    </div>

                    <div className="flex flex-col grow lg:pl-5">
                      <header className="flex gap-2 items-center mb-4">
                        <p className="text-2xl capitalize">
                          {product.productName}
                        </p>
                        {!product.variations && (
                          <span className="border self-end border-b border-white/10 grow"></span>
                        )}
                        {!product.variations && (
                          <p className="text-xl">{`₦${product.productPrice}`}</p>
                        )}
                      </header>
                      {product.variations ? (
                        <div className="text-white/70 flex flex-col gap-3">
                          {product.variations.map((variation, index) => (
                            <div
                              key={index}
                              className="flex items-center gap-4 text-lg"
                            >
                              <p className="capitalize">
                                {variation.type.toLowerCase()}
                              </p>
                              <span className="border self-center border-b border-white/10 grow"></span>
                              <p>{`₦${variation.price}`}</p>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <p className="text-white/70">
                          {product.productDescription}
                        </p>
                      )}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          );
        })}
      </section>
    </main>
  );
}

export default Menu;
