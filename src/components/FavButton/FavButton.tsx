import clsx from "clsx";
import { ComponentProps } from "react";
import { FavIcon, IconSize } from "@/components";
import "./FavButton.scss";

export type FavButtonProps = {
  isActive?: boolean;
  size?: IconSize;
} & Omit<ComponentProps<"button">, "children">;

export const FavButton = ({
  isActive,
  size,
  className,
  ...props
}: FavButtonProps) => {
  return (
    <button
      {...props}
      className={clsx(
        "FavButton",
        { "FavButton--active": isActive },
        className
      )}
    >
      <FavIcon size={size} />
    </button>
  );
};
