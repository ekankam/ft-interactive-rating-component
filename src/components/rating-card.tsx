import React from "react";
import star from "../assets/images/icon-star.svg";
import RatingButton from "./rating-button";
import CardWrapper from "./card-wrapper";

interface RatingCardProps {
  handleClick: any;
  handleSubmit: any;
  rating: string;
}

export default function RatingCard({
  handleClick,
  handleSubmit,
  rating,
}: RatingCardProps) {
  return (
    <CardWrapper className="">
      <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-dark-blue flex items-center justify-center mb-[30px]">
        <img src={star} alt="star" className="relative w-4 h-4" />
      </div>
      <div className="mb-7">
        <h1 className="text-2xl lg:text-[28px] font-bold mb-[7px]">
          How did we do?
        </h1>
        <p className="text-light-gray lg:leading-6 sm:text-sm leading-[22px]">
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
      </div>
      <div className="flex items-center lg:gap-[21px] mb-8 gap-[10px]">
        <RatingButton
          value="1"
          onClick={handleClick}
          isSelected={rating === "1"}
        />
        <RatingButton
          value="2"
          onClick={handleClick}
          isSelected={rating === "2"}
        />
        <RatingButton
          value="3"
          onClick={handleClick}
          isSelected={rating === "3"}
        />
        <RatingButton
          value="4"
          onClick={handleClick}
          isSelected={rating === "4"}
        />
        <RatingButton
          value="5"
          onClick={handleClick}
          isSelected={rating === "5"}
        />
      </div>
      <button
        type="submit"
        className="w-full uppercase rounded-[22px] bg-orange font-bold tracking-[2px] py-[11px] hover:bg-white hover:text-orange transition-colors ease-in-out sm:text-sm"
        onClick={handleSubmit}
      >
        submit
      </button>
    </CardWrapper>
  );
}
