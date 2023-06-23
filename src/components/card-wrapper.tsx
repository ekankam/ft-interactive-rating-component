import React from "react";

interface CardWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export default function CardWrapper({ children, className }: CardWrapperProps) {
  return (
    <div
      className={`p-8 bg-gradient w-[327px] lg:w-[412px] rounded-[30px] ${className}`}
    >
      {children}
    </div>
  );
}
