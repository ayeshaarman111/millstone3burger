import React from "react";

const Carousel = () => {
  return (
    <div>
      <section className=" bg-gradient-to-r from-black to-grey-700 ">
        <div className="py-4 px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 h-full">
            <div className="col-span-2 sm:col-span-1 md:col-span-2  bg-gradient-to-r from-black to-grey-700 h-auto md:h-full flex flex-col ">
              <a
                href=""
                className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 flex-grow"
              >
                <img
                  src="/pic2.webp"
                  alt="burger1"
                  className="absolute inset-0 h-full w-full object-cover group-hover:sclae-105 transition-transform duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradiant-to-b from-grey-900/25 to grey-900/5"></div>
              <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 =-4 xs:text-">
                Gourment Grills{"  "}
              </h3>
              
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Carousel;
