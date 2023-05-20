import { Carousel, IconButton } from "@material-tailwind/react";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline"

export default function CarouselHome() {
  return (
    <Carousel
      className="rounded-xl z-10"
      loop={true}
      autoplay={true}
      prevArrow={({ handlePrev }) => (
        <IconButton
          variant="text"
          color="white"
          size="lg"
          onClick={handlePrev}
          className="!absolute top-2/4 -translate-y-2/4 left-4"
        >
          <ArrowLeftIcon strokeWidth={2} className="w-6 h-6" />
        </IconButton>
      )}
      nextArrow={({ handleNext }) => (
        <IconButton
          variant="text"
          color="white"
          size="lg"
          onClick={handleNext}
          className="!absolute top-2/4 -translate-y-2/4 !right-4"
        >
          <ArrowRightIcon strokeWidth={2} className="w-6 h-6" />
        </IconButton>
      )}
    >
      <img
        src="https://i.imgur.com/XJszBWz.jpg"
        alt="image 1"
        className="h-[30vh] md:h-[90vh] w-[100vw] object-fill"
      />
      <img
        src="https://i.imgur.com/r7VPyT9.jpg"
        alt="image 2"
        className="h-[30vh] md:h-[90vh] w-[100vw] object-fill"
      />
      <img
        src="https://i.imgur.com/NdPkp53.jpg"
        alt="image 3"
        className="h-[30vh] md:h-[90vh] w-[100vw] object-fill"
      />
    </Carousel>
  );
}