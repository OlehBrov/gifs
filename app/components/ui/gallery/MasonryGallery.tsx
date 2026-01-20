"use client";

import { GifType } from "@/app/types/types";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { ImageCard } from "../imageCard/ImageCard";
import { useEffect,  useState } from "react";

export const MasonryGallery = ({
  items,
  favorites,
  onFavoritesClick,
}: {
  items: GifType[];
  favorites?: { id: number }[];
  onFavoritesClick?: (id: number) => void;
}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // or a placeholder component to maintain layout
  }
  return (
    <ResponsiveMasonry
      columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
      gutterBreakPoints={{ 350: "12px", 750: "16px", 900: "24px" }}
    >
      <Masonry
        columnsCount={3}
        gutter="24px"
        style={{ margin: "0 auto" }} // Add explicit style
      >
        {items.map((item) => (
          <ImageCard
            key={item.id}
            id={item.id}
            imageUrl={item.file.md.gif.url}
            title={item.title}
            width={item.file.md.gif.width}
            height={item.file.md.gif.height}
            favorites={favorites}
            onFavoritesClick={onFavoritesClick}
          />
        ))}
      </Masonry>
    </ResponsiveMasonry>
  );
};
