import clsx from "clsx";
import "./Icon.scss";
import { IconProps } from "./types";

export const MagnifyingGlassIcon = ({ size = "md" }: IconProps) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 13 13'
      className={clsx("icon", `icon__size--${size}`)}
    >
      <path
        fill='currentColor'
        d='M11.906 11.052c.117.117.117.305 0 .399l-.539.539c-.094.117-.281.117-.398 0L8.133 9.154a.378.378 0 01-.07-.211v-.305A4.935 4.935 0 014.874 9.81 4.871 4.871 0 010 4.935C0 2.263 2.18.06 4.875.06 7.547.06 9.75 2.263 9.75 4.935a4.908 4.908 0 01-1.195 3.188h.304c.07 0 .141.046.211.093l2.836 2.836zM4.875 8.685a3.746 3.746 0 003.75-3.75 3.761 3.761 0 00-3.75-3.75 3.746 3.746 0 00-3.75 3.75 3.731 3.731 0 003.75 3.75z'
      />
    </svg>
  );
};
