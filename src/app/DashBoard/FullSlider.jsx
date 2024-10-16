"use client";
import React, { useEffect, useRef } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoIosArrowRoundBack } from "react-icons/io";

const Carousel = () => {
  const carouselSliderRef = useRef(null);
  const prevButtonRef = useRef(null);
  const nextButtonRef = useRef(null);
  const screenRef = useRef(null);
  const autoplayRef = useRef(null); // New ref for autoplay
  const pixelVegetableImages = [
    {
      title: "Spinach",
      url: "https://images.pexels.com/photos/1458694/pexels-photo-1458694.jpeg",
    },
    {
      title: "Tomatoes",
      url: "https://images.pexels.com/photos/128420/pexels-photo-128420.jpeg",
    },

    {
      title: "Bell Peppers",
      url: "https://images.pexels.com/photos/452773/pexels-photo-452773.jpeg",
    },
    {
      title: "Cucumbers",
      url: "https://images.pexels.com/photos/1446076/pexels-photo-1446076.jpeg",
    },
    {
      title: "Zucchini",
      url: "https://images.pexels.com/photos/533312/pexels-photo-533312.jpeg",
    },
    {
      title: "Lettuce",
      url: "https://images.pexels.com/photos/1068772/pexels-photo-1068772.jpeg",
    },
    {
      title: "Onions",
      url: "https://images.pexels.com/photos/890507/pexels-photo-890507.jpeg",
    },
    {
      title: "Garlic",
      url: "https://images.pexels.com/photos/616404/pexels-photo-616404.jpeg",
    },
    {
      title: "Eggplant",
      url: "https://images.pexels.com/photos/434465/pexels-photo-434465.jpeg",
    },
    {
      title: "Asparagus",
      url: "https://images.pexels.com/photos/1834395/pexels-photo-1834395.jpeg",
    },
    {
      title: "Corn",
      url: "https://images.pexels.com/photos/461208/pexels-photo-461208.jpeg",
    },
    {
      title: "Peas",
      url: "https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg",
    },
  ];

  const getActiveSlide = () =>
    carouselSliderRef.current.querySelector(".carousel__slide.active");

  const getFirstSlide = () => carouselSliderRef.current.firstElementChild;

  const getLastSlide = () => carouselSliderRef.current.lastElementChild;

  const getSiblingSlide = (slide, direction) =>
    direction === "prev"
      ? slide.previousElementSibling
      : slide.nextElementSibling;

  const getNewActiveSlide = (key, activeSlide) => {
    const actions = {
      Home: getFirstSlide,
      End: getLastSlide,
      ArrowLeft: () => getSiblingSlide(activeSlide, "prev"),
      ArrowRight: () => getSiblingSlide(activeSlide, "next"),
    };
    return actions[key]?.() || null;
  };

  const updateScreen = (activeSlide) => {
    const img = activeSlide.querySelector("img").cloneNode(true);
    screenRef.current.innerHTML = "";
    screenRef.current.appendChild(img);
  };

  const scrollToActiveSlide = (activeSlide) => {
    const { offsetLeft, offsetWidth } = activeSlide;
    const { clientWidth } = carouselSliderRef.current;

    carouselSliderRef.current.scrollTo({
      left: offsetLeft - clientWidth / 2 + offsetWidth / 2,
      behavior: "smooth",
    });
  };

  const updateActiveSlideClass = (activeSlide) => {
    carouselSliderRef.current
      .querySelectorAll(".carousel__slide.active")
      .forEach((slide) => slide.classList.remove("active"));
    activeSlide.classList.add("active");
  };

  const updateCarousel = (activeSlide) => {
    updateActiveSlideClass(activeSlide);
    updateScreen(activeSlide);
    scrollToActiveSlide(activeSlide);
    updateButtonStates(activeSlide);
  };

  const updateButtonStates = (activeSlide) => {
    const prevButton = prevButtonRef.current;
    const nextButton = nextButtonRef.current;

    prevButton.disabled = !getSiblingSlide(activeSlide, "prev");
    nextButton.disabled = !getSiblingSlide(activeSlide, "next");
  };

  const handleKeydown = (e) => {
    const activeSlide = getActiveSlide();
    const newActiveSlide = getNewActiveSlide(e.key, activeSlide);

    if (newActiveSlide) {
      e.preventDefault();
      updateCarousel(newActiveSlide);
    }
  };

  const handleButtonClick = (direction) => {
    const activeSlide = getActiveSlide();
    const newActiveSlide = getSiblingSlide(activeSlide, direction);

    if (newActiveSlide) {
      updateCarousel(newActiveSlide);
    }
  };

  const handleCarouselClick = (e) => {
    const clickedSlide = e.target.closest(".carousel__slide");
    if (clickedSlide) {
      updateCarousel(clickedSlide);
    }
  };

  const startAutoplay = () => {
    autoplayRef.current = setInterval(() => {
      const activeSlide = getActiveSlide();
      const nextSlide = getSiblingSlide(activeSlide, "next") || getFirstSlide();
      updateCarousel(nextSlide);
    }, 3000); // Change slides every 3 seconds
  };

  const stopAutoplay = () => {
    clearInterval(autoplayRef.current);
  };

  useEffect(() => {
    const carouselSlider = carouselSliderRef.current;

    updateCarousel(getFirstSlide());
    startAutoplay(); // Start autoplay on mount

    document.addEventListener("keydown", handleKeydown);
    prevButtonRef.current.addEventListener("click", () =>
      handleButtonClick("prev")
    );
    nextButtonRef.current.addEventListener("click", () =>
      handleButtonClick("next")
    );
    carouselSlider.addEventListener("click", handleCarouselClick);

    // Stop autoplay on hover
    carouselSlider.addEventListener("mouseover", stopAutoplay);
    carouselSlider.addEventListener("mouseout", startAutoplay);

    return () => {
      document.removeEventListener("keydown", handleKeydown);
      prevButtonRef.current.removeEventListener("click", () =>
        handleButtonClick("prev")
      );
      nextButtonRef.current.removeEventListener("click", () =>
        handleButtonClick("next")
      );
      carouselSlider.removeEventListener("click", handleCarouselClick);
      carouselSlider.removeEventListener("mouseover", stopAutoplay);
      carouselSlider.removeEventListener("mouseout", startAutoplay);
      stopAutoplay(); // Clean up autoplay on unmount
    };
  }, []);

  return (
    <div className="image-thumbnail-carousel">
      <section className="image-display">
        <div className="screen" ref={screenRef}></div>
      </section>
      <section className="thumbnail-carousel">
        <div>
          <div className="absolute right-0">
            <ul className="carousel__slider" ref={carouselSliderRef}>
              {pixelVegetableImages.map((item, index) => (
                <li className="carousel__slide" key={index}>
                  <div className="thumbnail">
                    <img
                      loading="lazy"
                      src={item.url}
                      alt=""
                      className="imgClass rounded-lg"
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex gap-9 absolute carousel__wrapper lg:bottom-0">
            <button
              type="button"
              className="carousel__btn prev"
              aria-label="Previous slide"
              ref={prevButtonRef}
            >
              <IoIosArrowRoundBack />
            </button>
            <button
              type="button"
              className="carousel__btn next"
              aria-label="Next slide"
              ref={nextButtonRef}
            >
              <IoIosArrowRoundForward />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Carousel;
