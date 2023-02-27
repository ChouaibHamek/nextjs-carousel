import { Car } from '../../src/types/car.interface';

const owner = 'volvo-cars';
const repo = 'god-frontend-code-test';
const path = 'public/api/cars.json';
const url = `https://raw.githubusercontent.com/${owner}/${repo}/master/${path}`;

/**
 * Fetch the data contained in the cars.json in the god-frontend-code-test
 * @returns Array of cars
 */
export default async function fetchCars(): Promise<Car[]> {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error: any) {
    console.error(error.message);
    throw error;
  }
}