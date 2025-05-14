export default function Card({ card, annualBilling }) {
  console.log("Card Rendered:", card.tier, "| annualBilling:", annualBilling);
  return (
    <div
      className={`flex flex-col rounded-[0.625rem] text-center p-7 gap-7 overflow-hidden shadow-xl min-w-[20.375rem] lg:min-w-[21.875rem] box-border ${
        card.bestValue ? "bg-purpleGradient" : "bg-white"
      } ${card.tier === "Basic" && "lg:rounded-r-none"} ${
        card.tier === "Master" && "lg:rounded-l-none"
      } ${card.tier === "Professional" && "lg:scale-y-110"}`}
    >
      {/* card tier */}
      <h2
        className={`font-bold text-[1.125rem]  ${
          card.bestValue ? "text-white" : "text-lightGray"
        }`}
      >
        {card.tier}
      </h2>

      {/* card pricing */}
      <div
        className={` font-bold text-[4.5rem] flex flex-row items-center mx-auto leading-none ${
          card.bestValue ? "text-white" : "text-darkGray"
        }`}
      >
        <span className="text-[2.5rem]">$</span>
        <span className="pl-3 ">
          {annualBilling ? card.yearlyCost : card.monthlyCost}
        </span>
      </div>

      <ul
        className={`flex flex-col gap-3 font-bold ${
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
