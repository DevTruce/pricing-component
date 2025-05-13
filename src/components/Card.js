import { useState } from "react";

export default function Card({ tier, cost, feature1, feature2, feature3 }) {
  const [activeCard, setActiveCard] = useState(false);

  function handleActiveCard() {
    setActiveCard(tier);
  }

  return (
    <div
      onClick={handleActiveCard}
      className={`flex flex-col rounded-[0.625rem] text-center mt-16 p-7 ${
        activeCard ? "bg-purpleGradient" : "bg-white"
      }`}
    >
      <h2
        className={`font-bold text-[1.125rem] mb-7 ${
          activeCard ? "text-white" : "text-lightGray"
        }`}
      >
        {tier}
      </h2>
      <h3
        className={` font-bold text-[4.5rem] ${
          activeCard ? "text-white" : "text-darkGray"
        }`}
      >
        $<span className="pl-[0.438rem]">{cost}</span>
      </h3>

      <ul
        className={`flex flex-col gap-5 font-bold mt-7 mb-7 ${
          activeCard ? "text-white" : "text-lightGray"
        }`}
      >
        <hr className={activeCard ? "hr-dark" : "hr-light"}></hr>
        <li>{feature1}</li>
        <hr className={activeCard ? "hr-dark" : "hr-light"}></hr>
        <li>{feature2}</li>
        <hr className={activeCard ? "hr-dark" : "hr-light"}></hr>
        <li>{feature3}</li>
        <hr className={activeCard ? "hr-dark" : "hr-light"}></hr>
      </ul>

      <button
        className={`rounded-md py-[0.7rem] font-bold border text-[0.813rem] w-full hover:bg-transparent hover:bg-none ${
          activeCard
            ? "bg-white text-blue hover:text-white hover:border-white"
            : "bg-purpleGradient text-white hover:text-blue hover:border-blue "
        }`}
      >
        LEARN MORE
      </button>
    </div>
  );
}
