export interface Car {
  id: string;
  modelName: string;
  bodyType: string;
  modelType: string;
  imageUrl: string;
}

export interface CarsContainerProps {
  cars: Car[];
  carsTypes: string[];
}

export enum BodyType {
  suv = "suv",
  estate = "estate",
  sedan = "sedan",
}
