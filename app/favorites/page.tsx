"use client";
import Image from "next/image";
import { useState } from "react";
import { Container } from "../components/container/Container";
import { useQuery } from "@tanstack/react-query";
import { getSingleImage } from "../lib/queryFuncs";
import { GifFileType, GifType } from "../types/types";
import { MasonryGallery } from "../components/ui/gallery/MasonryGallery";

export default function Page() {
  const [images, setImages] = useState<string | null>(() => {
    try {
      if (typeof window === "undefined") return null;
      const stored = localStorage.getItem("favorites");
      const storedFavorites: Array<{ id: string; url: string }> = stored
        ? JSON.parse(stored)
        : [];
      const ids = storedFavorites.map((fav) => fav.id).join(",");

      return ids || null;
    } catch {
      return null;
    }
  });

  const { data, isPending } = useQuery({
    queryKey: ["manyImage", images],
    queryFn: () => getSingleImage(images as string),
    enabled: !!images,
  });
  console.log("Favorites data:", data);
  if (isPending) {
    return (
      <Container>
        <p className="text-4xl">Loading</p>
      </Container>
    );
  }
  return (
    <Container>
      <h1 className="mt-4 text-2xl font-bold mb-4">My Favorites</h1>
      {images === null ? (
        <p>You have no favorite images yet.</p>
      ) : (
        <div className="py-4">
          {/* {data.data.data.map((image: GifType) => (
            <div key={image.id} className="border rounded overflow-hidden">
              <Image
                width={300}
                height={200}
                src={image.file.hd.gif.url}
                alt={`Favorite ${image.id}`}
                className="w-full h-auto"
              />
            </div>
          ))} */}
          <MasonryGallery items={data?.data.data ?? []} />
        </div>
      )}
    </Container>
  );
}
