import React, { useState } from "react";
import { Click, Block } from "vcc-ui";
import Image from "next/image";
import styles from "../styles/CarouselNavigation.module.css";

interface Props {
  isMobile: boolean;
  previous: Function;
  next: Function;
  slideToItem: Function;
  swipeEventHandler: Function;
  carIds: string[];
}

const Filter: React.FC<Props> = ({
  carIds,
  isMobile,
  previous,
  next,
  slideToItem,
  swipeEventHandler,
}) => {
  const [activeCar, setActiveCar] = useState(carIds?.[0]);
  const handleMobileNavigationClick = (carId: string) => {
    slideToItem(carId);
    setActiveCar(carId);
  };
  swipeEventHandler((event) => {
    if (event.eventName === "onSlideStartChange") {
      setActiveCar(event.nextItem.id);
    }
  });

  return isMobile
    ? renderMobileNavigation(carIds, activeCar, handleMobileNavigationClick)
    : renderArrowNavigation(previous, next);
};

const renderArrowNavigation = (previous: Function, next: Function) => (
  <Block className={styles.arrowsContainer}>
    <Click onClick={previous} className={styles.rightArrow}>
      <Image alt="left" src="/images/chevron-circled.svg" layout="fill" />
    </Click>
    <Click onClick={next} className={styles.leftArrow}>
      <Image alt="right" src="/images/chevron-circled.svg" layout="fill" />
    </Click>
  </Block>
);

const renderMobileNavigation = (
  carIds: string[],
  activeCar: string,
  handleMobileNavigationClick: Function
) => (
  <Block
    extend={{
      width: "100%",
      margin: "auto",
      height: "60px",
      display: "flex",
      justifyContent: "center",
    }}
  >
    {carIds?.map((carId) => (
      <Click
        key={carId}
        onClick={() => handleMobileNavigationClick(carId)}
        extend={{
          background: "#dfdede",
          width: "10px",
          height: "10px",
          overflow: "hidden",
          opacity: "1",
          margin: "7px",
          borderRadius: "100%",
          transition: "background 300ms ease 0s",
          ...(activeCar === carId && { background: "#000" }),
        }}
      />
    ))}
  </Block>
);

export default Filter;
