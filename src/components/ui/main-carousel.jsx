import { useState, useRef, useEffect } from "react";
import { IconArrowNarrowRight } from "@tabler/icons-react";

const Slide = ({
  slide,
  index,
  current,
  handleSlideClick
}) => {
  const slideRef = useRef(null);
  const xRef = useRef(0);
  const yRef = useRef(0);
  const frameRef = useRef();

  useEffect(() => {
    const animate = () => {
      if (!slideRef.current) return;
      const x = xRef.current;
      const y = yRef.current;
      slideRef.current.style.setProperty("--x", `${x}px`);
      slideRef.current.style.setProperty("--y", `${y}px`);
      frameRef.current = requestAnimationFrame(animate);
    };
    frameRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameRef.current);
  }, []);

  const handleMouseMove = (e) => {
    const el = slideRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    xRef.current = e.clientX - (r.left + r.width/2);
    yRef.current = e.clientY - (r.top + r.height/2);
  };

  const imageLoaded = (e) => {
    e.currentTarget.style.opacity = "1";
  };

  return (
    <div className="[perspective:1200px] [transform-style:preserve-3d]">
      <li
        ref={slideRef}
        className="flex flex-1 flex-col items-center justify-center relative text-center text-white opacity-100 transition-all duration-300 ease-in-out w-[60vmin] h-[60vmin] mx-[4vmin] z-10"
        onClick={() => handleSlideClick(index)}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => { xRef.current = 0; yRef.current = 0 }}
        style={{
          transform: current !== index ? "scale(0.98)" : "scale(1)",
          transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
          transformOrigin: "bottom",
        }}
      >
        <div
          className="absolute top-0 left-0 w-full h-full bg-[#1D1F2F] rounded-[2%] overflow-hidden transition-all duration-150 ease-out"
          style={{
            transform: current === index 
              ? "translate3d(calc(var(--x) / 30), calc(var(--y) / 30), 0)"
              : "none",
          }}
        >
          <img
            className="absolute inset-0 w-[120%] h-[120%] object-cover opacity-100 transition-opacity duration-600 ease-in-out"
            style={{ opacity: current === index ? 1 : 0.5 }}
            alt={slide.title}
            src={slide.src}
            onLoad={imageLoaded}
            loading="eager"
          />
          {current === index && (
            <div className="absolute inset-0 bg-black/30 transition-all duration-1000" />
          )}
        </div>

        <article
          className={`relative p-[4vmin] transition-opacity duration-1000 ease-in-out ${
            current === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <h2 className="text-lg md:text-2xl lg:text-4xl font-semibold relative">
            {slide.title}
          </h2>
          <div className="flex justify-center">
            <a
              href={slide.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 px-4 py-2 w-fit mx-auto sm:text-sm text-black bg-white h-12 border border-transparent text-xs flex justify-center items-center rounded-2xl hover:shadow-lg transition duration-200 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
              onClick={(e) => e.stopPropagation()}
            >
              {slide.button}
            </a>
          </div>
        </article>
      </li>
    </div>
  );
};

const CarouselControl = ({ type, title, handleClick }) => (
  <button
    className={`w-10 h-10 flex items-center mx-2 justify-center bg-neutral-200 dark:bg-neutral-800 border-3 border-transparent rounded-full focus:border-[#6D64F7] focus:outline-none hover:-translate-y-0.5 active:translate-y-0.5 transition duration-200 ${
      type === "previous" ? "rotate-180" : ""
    }`}
    title={title}
    onClick={handleClick}
  >
    <IconArrowNarrowRight className="text-neutral-600 dark:text-neutral-200" />
  </button>
);

export default function Carousel({ slides }) {
  const [current, setCurrent] = useState(1);
  const [extendedSlides, setExtendedSlides] = useState([]);
  const ulRef = useRef(null);
  const isTransitioning = useRef(false);

  useEffect(() => {
    if (slides.length > 0) {
      setExtendedSlides([slides[slides.length - 1], ...slides, slides[0]]);
    }
  }, [slides]);

  const handleNavigation = (direction) => {
    if (isTransitioning.current) return;
    isTransitioning.current = true;
    setCurrent(prev => prev + direction);
  };

  const handleTransitionEnd = () => {
    const ul = ulRef.current;
    if (!ul) return;

    if (current === 0) {
      ul.style.transition = 'none';
      setCurrent(extendedSlides.length - 2);
      ul.offsetHeight; // Trigger reflow
      ul.style.transition = '';
    } else if (current === extendedSlides.length - 1) {
      ul.style.transition = 'none';
      setCurrent(1);
      ul.offsetHeight; // Trigger reflow
      ul.style.transition = '';
    }
    isTransitioning.current = false;
  };

  useEffect(() => {
    const ul = ulRef.current;
    if (ul) {
      ul.addEventListener('transitionend', handleTransitionEnd);
      return () => ul.removeEventListener('transitionend', handleTransitionEnd);
    }
  }, [current, extendedSlides.length]);

  if (extendedSlides.length === 0) return null;

  return (
    <div className="relative w-[60vmin] h-[60vmin] mx-auto">
      <ul
        ref={ulRef}
        className="absolute flex ml-[-6vmin] md:ml-[-4vmin] transition-transform duration-1000 ease-in-out"
        style={{
          transform: `translateX(-${current * (100 / extendedSlides.length)}%)`,
        }}
      >
        {extendedSlides.map((slide, index) => (
          <Slide
            key={index}
            slide={slide}
            index={index}
            current={current}
            handleSlideClick={(i) => !isTransitioning.current && setCurrent(i)}
          />
        ))}
      </ul>
      <div className="absolute flex justify-center w-full top-[calc(100%+1rem)]">
        <CarouselControl
          type="previous"
          title="Go to previous slide"
          handleClick={() => handleNavigation(-1)}
        />
        <CarouselControl
          type="next"
          title="Go to next slide"
          handleClick={() => handleNavigation(1)}
        />
      </div>
    </div>
  );
}