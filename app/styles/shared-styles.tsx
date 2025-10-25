import { twMerge } from "tailwind-merge";

export const SharedStyles = {
  button: twMerge(
    "bg-less-white",
    "w-fit",
    "text-center",
    "py-3 px-5",
    "rounded-3xl",
    "font-light",
    "tracking-wide",
    "border border-white",
    "hover:not-disabled:bg-dark-turquoise",
    "hover:not-disabled:text-white",
    "hover:not-disabled:font-normal",
    "disabled:cursor-not-allowed",
    "disabled:opacity-50"
  ),
  section: "md:px-16 px-4 py-12 pb-20",
};
