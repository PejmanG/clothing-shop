import Slide, { slide } from "../slide/slide.component";

interface ISlideshow {
  slides: (slide & { id: number })[];
}

const Slideshow = ({ slides }: ISlideshow) => {
  return (
    <div className="relative bg-gray-200 dark:bg-slate-500 text-white h-[65vh] overflow-x-hidden">
      {/* Slides container */}
      <div className="h-full inline-flex">
        {slides.map((slide) => (
          <Slide key={slide.id} slide={slide} />
        ))}
      </div>
      {/* The buttons to change slides */}
      <div className="absolute w-full inset-0 flex justify-between items-center text-2xl">
        <span className="cursor-pointer py-4 px-7">
          &#10094;
        </span>
        <span className="cursor-pointer py-4 px-7">
          &#10095;
        </span>
      </div>
      <div className="absolute bottom-0 w-full flex justify-center items-center text-white">
        <span>&#9899;</span>
        <p>button</p>
        <p>button</p>
      </div>
    </div>
  );
};
export default Slideshow;
