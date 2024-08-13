import { useCallback, useEffect, useState } from "react";
import { API_URL } from "@/constants/api";
import { City, UseCities } from "./@types/useCities";

export default (): UseCities => {
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [cities, setCities] = useState<City[]>([]);
  const [page, setPage] = useState<number>(1);
  const [emptyData, setEmptyData] = useState<boolean>(false);

  const fetchCities = useCallback(async () => {
    const url = new URL(API_URL);
    url.searchParams.append("page", page + "");
    url.searchParams.append("limit", "10");
    try {
      const postsRequest = await fetch(url);
      if (!postsRequest.ok) {
        setError(true);
        return;
      }
      const postsData = await postsRequest.json();
      if (!postsData.length) {
        setEmptyData(true);
        return;
      }
      setCities((currentData) => [...currentData, ...postsData]);
    } catch {
      setError(true);
    }
  }, [page, emptyData]);

  const nextPage = useCallback(() => {
    if (emptyData) return;
    setPage((currentPage) => currentPage + 1);
    fetchCities();
  }, [page, emptyData]);

  useEffect(() => {
    setLoading(true);
    fetchCities();
    setLoading(false);
  }, []);

  return {
    loading,
    cities,
    page,
    emptyData,
    error,
    setLoading,
    setCities,
    fetchCities,
    nextPage,
  };
};
