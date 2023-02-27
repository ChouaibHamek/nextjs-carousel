import React, { useState } from "react";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import fetchCars from "../public/api/fetchCars";

import Filter from "../src/components/Filter";
import { Car } from "../src/types/car.interface";
import Carousel from "../src/components/Carousel";
import { Grid, Row, Col } from "vcc-ui";

const Home: React.FC<InferGetStaticPropsType<typeof getStaticProps>> = ({
  cars,
}) => {
  const [currentFilter, setFilter] = useState<string>("All");
  const uniqueCarBodyTypes: string[] = Array.from(
    new Set(cars.map((car: Car) => car.bodyType))
  );
  const filteredCars =
    currentFilter === "All"
      ? cars
      : cars.filter((car: Car) => car.bodyType === currentFilter);

  return (
    <>
      <Grid>
        <Row align="center">
          <Col size={10}>
            <Filter
              currentFilter={currentFilter}
              setFilter={setFilter}
              filterOptions={["All", ...uniqueCarBodyTypes]}
            />
          </Col>
        </Row>
        <Row align="center">
          <Col size={10}>
            <Carousel cars={filteredCars} key={`car-${currentFilter}`} />
          </Col>
        </Row>
      </Grid>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const cars = await fetchCars();
  return {
    props: {
      cars,
    },
  };
};

export default Home;
