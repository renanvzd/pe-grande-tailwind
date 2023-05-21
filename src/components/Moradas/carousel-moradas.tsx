import { Carousel } from "@material-tailwind/react";

export default function CarouselMinilofts() {
  return (
    <div className="mx-auto justify-center items-center w-[300px] md:w-[500px] my-3 md:my-10 md:pt-3 pt-8">
      <p className="pb-0 lg:pb-5 lg:text-2xl md:text-xl text-center font-bold">Confira as fotos dessa morada:</p>
      <Carousel
        className="rounded-xl"
        loop={true}
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${activeIndex === i ? "bg-white w-8" : "bg-white/50 w-4"
                  }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        )}
      >
        <div className="flex mx-auto justify-center items-center">
          <img
            src="https://i.imgur.com/S9ghgXn.jpg"
            alt="image 1"
            className="h-[350px] md:h-[500px] w-[100%] md:w-[100%] object-contain"
          />
        </div>
        <div className="flex mx-auto justify-center items-center">
          <img
            src="https://i.imgur.com/64rRqQl.jpg"
            alt="image 2"
            className="h-[350px] md:h-[500px] w-[100%] md:w-[100%] object-contain"
          />
        </div>
        <div className="flex mx-auto justify-center items-center">
          <img
            src="https://i.imgur.com/MPfOAPx.jpg"
            alt="image 3"
            className="h-[350px] md:h-[500px] w-[100%] md:w-[100%] object-contain"
          />
        </div>
        <div className="flex mx-auto justify-center items-center">
          <img
            src="https://i.imgur.com/tSIXBBW.jpg"
            alt="image 4"
            className="h-[350px] md:h-[500px] w-[100%] md:w-[100%] object-contain"
          />
        </div>
        <div className="flex mx-auto justify-center items-center">
          <img
            src="https://i.imgur.com/NfMdQxJ.jpg"
            alt="image 5"
            className="h-[350px] md:h-[500px] w-[100%] md:w-[100%] object-contain"
          />
        </div>
        <div className="flex mx-auto justify-center items-center">
          <img
            src="https://i.imgur.com/Ks4z5hc.jpg"
            alt="image 6"
            className="h-[350px] md:h-[500px] w-[100%] md:w-[100%] object-contain"
          />
        </div>
        <div className="flex mx-auto justify-center items-center">
          <img
            src="https://i.imgur.com/7tkZOIX.jpg"
            alt="image 7"
            className="h-[350px] md:h-[500px] w-[100%] md:w-[100%] object-contain"
          />
        </div>
        <div className="flex mx-auto justify-center items-center">
          <img
            src="https://i.imgur.com/YyTJ6oy.jpg"
            alt="image 8"
            className="h-[350px] md:h-[500px] w-[100%] md:w-[100%] object-contain"
          />
        </div>
        <div className="flex mx-auto justify-center items-center">
          <img
            src="https://i.imgur.com/pgLWcXz.jpg"
            alt="image 9"
            className="h-[350px] md:h-[500px] w-[100%] md:w-[100%] object-contain"
          />
        </div>
        <div className="flex mx-auto justify-center items-center">
          <img
            src="https://i.imgur.com/3GJvu0U.jpg"
            alt="image 10"
            className="h-[350px] md:h-[500px] w-[100%] md:w-[100%] object-contain"
          />
        </div>
        <div className="flex mx-auto justify-center items-center">
          <img
            src="https://i.imgur.com/bSBz1pQ.jpg"
            alt="image 11"
            className="h-[350px] md:h-[500px] w-[100%] md:w-[100%] object-contain"
          />
        </div>
        <div className="flex mx-auto justify-center items-center">
          <img
            src="https://i.imgur.com/vJJyP56.jpg"
            alt="image 12"
            className="h-[350px] md:h-[500px] w-[100%] md:w-[100%] object-contain"
          />
        </div>
        <div className="flex mx-auto justify-center items-center">
          <img
            src="https://i.imgur.com/C5WcO1U.jpg"
            alt="image 13"
            className="h-[350px] md:h-[500px] w-[100%] md:w-[100%] object-contain"
          />
        </div>
      </Carousel>
    </div>
  );
}