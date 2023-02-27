import React from "react";
import { Text, Link, Icon } from "vcc-ui";
import Image from "next/image";
import { Car } from "../types/car.interface";
import styles from "../styles/CarItem.module.css";

interface Props {
  car: Car;
}

const CarItem: React.FC<Props> = ({ car }) => {
  return (
    <article key={car.id} className={styles.wrapper}>
      <div className={styles.info}>
        <Text subStyle="inline-link">
          <b>{car.bodyType.toUpperCase()}</b>
        </Text>
        <div className={styles.modelInfo}>
          <Text subStyle="emphasis">
            <b>{car.modelName}</b>
          </Text>
          <Text subStyle="inline-link">{car.modelType}</Text>
        </div>
      </div>
      <div className={styles.image}>
        <Image
          src={car.imageUrl}
          alt={car.modelName}
          height={400}
          width={500}
          className={styles.image}
        ></Image>
      </div>
      <div className={styles.linksContainer}>
        <div className={styles.link}>
          <Link href={`/learn/${car.id}`}>
            LEARN
            <Icon type="navigation-chevronforward-12" color="action" />
          </Link>
        </div>
        <div className={styles.link}>
          <Link href={`/shop/${car.id}`}>
            SHOP
            <Icon type="navigation-chevronforward-12" color="action" />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default CarItem;
