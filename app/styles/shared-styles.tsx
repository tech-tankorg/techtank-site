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
  section: "px-16 py-12 pb-20",
  sectionHeader: "text-6xl mb-12",
  subHeader: "text-2xl/loose",
  logisticsItem: "mb-8",
  itemHeader: "text-xl/loose font-light",
  paragraph: "text-base/loose font-light text-justify",
  buttonAlt: "block size-max bg-black text-white px-12 py-6 rounded-full font-bold",
};
