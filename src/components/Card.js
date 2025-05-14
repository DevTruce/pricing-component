export default function Card({ card, annualBilling }) {
  return (
    <div
      className={`flex flex-col rounded-[0.625rem] text-center mb-8 p-7 overflow-hidden shadow-xl ${
        card.bestValue ? "bg-purpleGradient" : "bg-white"
      } ${card.tier === "Basic" && "lg:rounded-r-none"} ${
        card.tier === "Master" && "lg:rounded-l-none"
      } ${card.tier === "Professional" && "lg:scale-y-110"}`}
    >
      <h2
        className={`font-bold text-[1.125rem] mb-7 ${
          card.bestValue ? "text-white" : "text-lightGray"
        }`}
      >
        {card.tier}
      </h2>
      <h3
        className={` font-bold text-[4.5rem] ${
          card.bestValue ? "text-white" : "text-darkGray"
        }`}
      >
        <div className="flex flex-row items-center">
          <span className="text-[2.5rem]">$</span>
          <span className="">
            {!annualBilling ? card.yearlyCost : card.monthlyCost}
          </span>
        </div>
      </h3>

      <ul
        className={`flex flex-col gap-5 font-bold mt-7 mb-7 ${
          card.bestValue ? "text-white" : "text-lightGray"
        }`}
      >
        <hr className={card.bestValue ? "hr-dark" : "hr-light"}></hr>
        <li>{card.feature1}</li>
        <hr className={card.bestValue ? "hr-dark" : "hr-light"}></hr>
        <li>{card.feature2}</li>
        <hr className={card.bestValue ? "hr-dark" : "hr-light"}></hr>
        <li>{card.feature3}</li>
        <hr className={card.bestValue ? "hr-dark" : "hr-light"}></hr>
      </ul>

      <button
        className={`rounded-md py-[0.7rem] font-bold border text-[0.813rem] w-full hover:bg-transparent hover:bg-none transition-all duration-300 ${
          card.bestValue
            ? "bg-white text-blue hover:text-white hover:border-white"
            : "bg-purpleGradient text-white hover:text-blue hover:border-blue "
        }`}
      >
        LEARN MORE
      </button>
    </div>
  );
}
