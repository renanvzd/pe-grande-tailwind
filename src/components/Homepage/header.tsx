import React from "react";

const HeaderHomepage = () => {
  return (
    <>
      <div data-aos="fade-up" >
        <div className="mx-auto bg-primary-background h-screen w-screen flex flex-col justify-start items-center lg:flex-row ">
          <div className="flex lg:w-3/6 w-4/5 justify-center lg:ml-10 lg:h-screen h-30">
            <div className="lg:flex lg:flex-col lg:text-left lg:max-w-full lg:mr-12
               md:text-left md:pr-8 lg:pl-8 mt-0">
              <h1 className="header-font font-extrabold mt-8 md:mt-12 text-white lg:text-7xl md:text-6xl text-4xl leading-tight lg:leading-snug tracking-wide">
                Unlock a <span className="header-font text-gradient">World </span>
                of possibilities.
              </h1>
              <div className="mt-10 lg:mt-10 mb-8 lg:mb-4 tracking-wide">
                <span className="font-poppins lg:text-5xl md:text-3xl text-2xl text-gradient mt-4 lg:leading-tight leading-normal">
                  Find the perfect professional for your needs &&nbsp;
                </span>
                <span className="font-poppins lg:text-5xl md:text-3xl text-2xl text-[#d5dbe8] lg:leading-tight md:leading-normal text-gradient-opposite">
                  explore our global network of talented individuals and companies now!
                </span>
              </div>
            </div>
          </div>
          <div className='mt-0'>
          </div>
        </div>
      </div>
    </>
  );
};

export { HeaderHomepage };
