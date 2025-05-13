import { useState } from "react";

export default function Header() {
  const [annualBilling, setAnnualBilling] = useState(false);

  function handleBillingToggle() {
    setAnnualBilling(cur => !cur);
  }

  return (
    <header className=" container flex flex-col gap-10">
      <h1 className="text-[2rem] font-bold text-lightGray text-center mt-16">
        Our Pricing
      </h1>

      <div className=" flex flex-row items-center mx-auto gap-6">
        <span className="text-lightGray font-bold opacity-50">Annually</span>

        <div
          onClick={handleBillingToggle}
          data-annual={annualBilling}
          className={`toggle`}
        ></div>

        <span className="text-lightGray font-bold opacity-50">Monthly</span>
      </div>
    </header>
  );
}
