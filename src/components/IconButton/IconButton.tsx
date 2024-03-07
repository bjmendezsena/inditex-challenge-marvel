import { ComponentProps } from "react";
import "./IconButton.scss";

export type IconButtonProps = {
  children: JSX.Element;
} & ComponentProps<"button">;
export const IconButton = ({ children, ...props }: IconButtonProps) => {
  return (
    <button {...props} className={"iconButton"}>
      {children}
    </button>
  );
};
