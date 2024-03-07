import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FavButton } from "@/components";
import { useFavourites } from "@/context";
import "./Header.scss";
export const Header = () => {
  const { favourites } = useFavourites();
  return (
    <div className='header'>
      <Link href={"/"}>
        <Image src='/logo.svg' alt='logo' width={130} height={52} />
      </Link>
      <div className='header__favourite'>
        <FavButton size='xl' isActive /> <p>{favourites.length}</p>
      </div>
    </div>
  );
};
