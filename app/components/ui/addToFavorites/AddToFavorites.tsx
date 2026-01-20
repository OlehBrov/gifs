"use client";

import { FavoritesIcon } from "../favoritesIcon/FavoritesIcon";

export const AddToFavorites = ({
  selected,
  onClick,
}: {
  selected: boolean;
  onClick: () => void;
}) => {
  return (
    <button onClick={onClick} className="flex gap-2 items-center text-sm">
      <FavoritesIcon color={selected ? "#e99700" : "#6B7280"} />{" "}
      {selected ? "Remove from favorites" : "Add to favorites"}
    </button>
  );
};
