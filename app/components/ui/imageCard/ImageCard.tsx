"use client";

import Image from "next/image";
import Link from "next/link";
import { AddToFavorites } from "../addToFavorites/AddToFavorites";

type ImageCardProps = {
  id: number;
  imageUrl: string;
  title: string;
  width: number;
  height: number;
  favorites?: { id: number }[];
  onFavoritesClick?: (id: number) => void;
};

export const ImageCard = ({
  id,
  imageUrl,
  title,
  width,
  height,
  favorites,
  onFavoritesClick,
}: ImageCardProps) => {
  return (
    <div key={id} className="flex flex-col w-full relative shadow-lg">
      <Image
        src={imageUrl}
        alt={title}
        className="w-full h-full rounded object-cover"
        width={width}
        height={height}
      />
      <div className="w-full bg-black/10 flex py-2 px-3 justify-between rounded-t">
        <p className="font-medium text-start text-sm w-2/3">Title: {title}</p>
        <Link href={"/details/" + id} className="text-sm w-1/3">More Details</Link>

        {favorites && onFavoritesClick && (
          <div className="flex items-center absolute right-0 top-0 bg-blue-200 rounded-bl-full py-2.5 px-4 ">
            <AddToFavorites
              selected={favorites.some((fav) => fav.id === id)}
              onClick={() => onFavoritesClick(id)}
            />
          </div>
        )}
      </div>
    </div>
  );
};
