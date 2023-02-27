import { useSpringCarousel } from "react-spring-carousel";
import ItemCarouselCar from "./CarItem";
import React, { useState, useEffect } from "react";
import { Block } from "vcc-ui";
import CarouselNavigation from "./CarouselNavigation";
import styles from "../styles/Carousel.module.css";
import { Car } from "../types/car.interface";

interface Props {
  cars: Car[];
}

const Carousel: React.FC<Props> = ({ cars }) => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  const isMobile = windowWidth < 768;
  const itemsPerSlide = isMobile ? 1 : Math.min(4, cars.length);

  const carouselItems = cars.map((item: Car) => {
    return {
      id: item.id,
      renderItem: <ItemCarouselCar car={item} />,
    };
  });

  const {
    carouselFragment,
    slideToPrevItem,
    slideToNextItem,
    slideToItem,
    useListenToCustomEvent,
  } = useSpringCarousel({
    withLoop: true,
    withThumbs: false,
    itemsPerSlide,
    items: carouselItems,
  });

  return (
    <Block className={styles.carouselWrapper}>
      {carouselFragment}
      <CarouselNavigation
        isMobile={isMobile}
        next={slideToNextItem}
        previous={slideToPrevItem}
        slideToItem={slideToItem}
        carIds={cars.map((car) => car.id)}
        swipeEventHandler={useListenToCustomEvent}
      />
    </Block>
  );
};

export default Carousel;
