import Link from "next/link";
import { Container } from "../container/Container";
import { Logo } from "../ui/logo/Logo";
import { FavoritesIcon } from "../ui/favoritesIcon/FavoritesIcon";

export const Header = () => {
  return (
    <header className="w-full border-b border-gray-200 bg-white">
      <Container>
        <div className="py-4 flex items-center justify-between">
          <Logo />
          <div>
            <Link href="/favorites" className="flex items-center gap-2 text-[#6B7280]">
              <FavoritesIcon /> Favorites
            </Link>
          </div>
        </div>
      </Container>
    </header>
  );
};
