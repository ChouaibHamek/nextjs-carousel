export interface Car {
  id: string;
  modelName: string;
  bodyType: BodyType;
  modelType: string;
  imageUrl: string;
}

export enum BodyType {
  suv = "suv",
  estate = "estate",
  sedan = "sedan",
}
