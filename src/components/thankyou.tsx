import React from "react";
import { ArrowLongLeftIcon } from "@heroicons/react/24/solid";
import CardWrapper from "./card-wrapper";
import thankyou from "../assets/images/illustration-thank-you.svg";

interface ThankYouProps {
  onClick: any;
  rating: string;
}

export default function ThankYou({ onClick, rating }: ThankYouProps) {
  return (
    <CardWrapper className="py-[45px] flex items-center flex-col relative">
      <div
        className="absolute flex items-center justify-center w-10 h-10 rounded-full cursor-pointer bg-dark-blue top-5 left-5"
        onClick={onClick}
      >
        <ArrowLongLeftIcon className="w-5 h-5 text-medium-gray" />
      </div>
      <div className="mb-8">
        <img src={thankyou} alt="phone" />
      </div>
      <div className="bg-dark-blue rounded-[22px] text-center leading-6 text-orange px-5 mb-9 sm:text-sm">
        {`You selected ${rating} out of 5`}
      </div>
      <div className="text-center lg:px-10">
        <h2 className="text-2xl lg:text-[28px] font-bold lg:mb-[7px] mb-[10px]">
          Thank you!
        </h2>
        <p className="leading-[22px] lg:leading-6 text-light-gray sm:text-sm">
          We appreciate you taking the time to give a rating. If you ever need
          more support, don’t hesitate to get in touch!
        </p>
      </div>
    </CardWrapper>
  );
}
