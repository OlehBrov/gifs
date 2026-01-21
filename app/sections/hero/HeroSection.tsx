"use client";
import { Container } from "@/app/components/container/Container";
import { FilterItem } from "@/app/components/ui/filtersItem/FilterItem";
import { MasonryGallery } from "@/app/components/ui/gallery/MasonryGallery";
import { Input } from "@/app/components/ui/input/Input";
import {
  getCategories,
  getImagesByCategory,
  searchImages,
} from "@/app/lib/queryFuncs";
import { ImagesCategory } from "@/app/types/types";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

export const HeroSection = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [debouncedSearch, setDebouncedSearch] = useState<string>("");
  const [filter, setFilter] = useState<{ [key: string]: boolean }>({});
  const [limit, setLimit] = useState<number>(20);

  const [favorites, setFavorites] = useState<
    {
      id: number;
    }[]
  >(() => {
    try {
      const stored = localStorage.getItem("favorites");
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  const result = useInfiniteQuery({
    queryKey: ["search", debouncedSearch, filter, limit],
    queryFn: ({ pageParam = 1 }) =>
      searchImages(debouncedSearch, filter, limit, pageParam),
    enabled: !!debouncedSearch,
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
          if (lastPage?.data?.has_next) {
        return lastPage.data.current_page + 1;
      }
      return undefined; // Більше немає сторінок
    },
  });
  const categories = useQuery({
    queryKey: ["categories"],
    queryFn: () => getCategories(),
  });

  const onCategory = useQuery({
    queryKey: ["categories"],
    queryFn: () => getImagesByCategory(filter as unknown as string, limit),
    enabled: !!filter,
  });
  const handleNextPage = () => {
    console.log(
      "result.fetchNextPage",
      result.fetchNextPage,
      typeof result.fetchNextPage,
    );
    result.fetchNextPage?.();
  };


  useEffect(() => {
    const id = setTimeout(() => setDebouncedSearch(searchTerm.trim()), 600);
    return () => clearTimeout(id);
  }, [searchTerm]);

  const images = result.data?.pages?.flatMap((p) => p.data?.data ?? []) ?? [];

  const handleFavoritesClick = (id: number) => {
    setFavorites((prev) => {
      const isAlreadyFavorite = prev.some((fav) => fav.id === id);
      let updatedFavorites;
      if (isAlreadyFavorite) {
        updatedFavorites = prev.filter((fav) => fav.id !== id);
      } else {
        updatedFavorites = [...prev, { id }];
      }
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      return updatedFavorites;
    });
  };

  return (
    <section className="w-full flex flex-col items-center text-center mb-20">
      <Container>
        <div className="flex flex-col justify-center items-center w-3xl mx-auto">
          <h1 className="text-5xl font-bold mb-6 text-black ">
            Discover visual inspiration
          </h1>
          <p className="text-center text-lg text-gray-600 max-w-2xl">
            Search through our curated collection of high-quality images and
            GIFs
          </p>
          <div className="w-full max-w-xl mt-8">
            <Input
              placeholder="Search for images and GIFs"
              value={searchTerm}
              onChange={(value) => setSearchTerm(value)}
            />
          </div>
          <div>
            {categories.data && (
              <div className="mt-6 flex flex-wrap justify-center gap-2">
                {categories.data.data.categories.map(
                  (category: ImagesCategory) => (
                    <FilterItem
                      key={category.category}
                      label={
                        category.category.charAt(0).toUpperCase() +
                        category.category.slice(1)
                      }
                      onClick={() =>
                        setFilter((prev) => ({
                          ...prev,
                          [category.category]: !prev[category.category],
                        }))
                      }
                      isSelected={!!filter[category.category]}
                    />
                  ),
                )}
              </div>
            )}
          </div>
        </div>
        {result.data && (
          <div className="py-4">
            <MasonryGallery
              items={images}
              favorites={favorites}
              onFavoritesClick={handleFavoritesClick}
            />
            <div>
              {result.data?.pages[0].data.has_next ? (
                <button
                  onClick={handleNextPage}
                  disabled={result.isFetchingNextPage}
                  className="py-2 px-5 border border-gray-400 shadow rounded-full mt-6"
                >
                  {result.isFetchingNextPage ? "Loading..." : "Load More"}
                </button>
              ) : (
                <p>No more images to load</p>
              )}
            </div>
          </div>
        )}
      </Container>
    </section>
  );
};
