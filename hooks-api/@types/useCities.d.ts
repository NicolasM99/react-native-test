import { Dispatch, SetStateAction } from "react";

export type City = {
  id: string;
  image: string;
  title: string;
  description: string;
};

export interface UseCities {
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
  cities: City[];
  setCities: Dispatch<SetStateAction<City[]>>;
  fetchCities: () => void;
  nextPage: () => void;
  page: number;
  emptyData: boolean;
  error: boolean;
}
