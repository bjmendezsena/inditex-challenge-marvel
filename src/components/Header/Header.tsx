import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FavButton } from "@/components";
import { useFavourites } from "@/context";
import "./Header.scss";
export const Header = () => {
  const { favourites, setShowFavourites, showFavourites } = useFavourites();

  const handleShowFavourites = () => {
    if (showFavourites || !favourites.length) return;
    setShowFavourites(true);
  };

  return (
    <div className='header'>
      <Link href={"/"}>
        <Image
          onClick={() => {
            setShowFavourites(false);
          }}
          src='/logo.svg'
          alt='logo'
          width={130}
          height={52}
        />
      </Link>
      <div className='header__favourite'>
        <FavButton size='xl' onClick={handleShowFavourites} isActive />{" "}
        <p>{favourites.length}</p>
      </div>
    </div>
  );
};
