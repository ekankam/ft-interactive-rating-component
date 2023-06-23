import React from "react";

interface RatingButtonProps {
  isSelected: boolean;
  value: string;
  onClick: any;
}

export default function RatingButton({
  isSelected,
  value,
  onClick,
}: RatingButtonProps) {
  const isActive = isSelected && "bg-medium-gray text-white";
  return (
    <button
      type="button"
      value={value}
      onClick={onClick}
      className={`text-sm w-[42px] h-[42px] lg:w-[51px] lg:h-[51px] rounded-full bg-dark-blue text-medium-gray lg:text-base font-bold leading-6 flex items-center justify-center hover:bg-orange hover:text-white transition-colors ease-in-out ${isActive}`}
    >
      {value}
    </button>
  );
}
