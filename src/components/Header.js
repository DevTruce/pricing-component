export default function Header({ annualBilling, setAnnualBilling }) {
  function handleBillingToggle() {
    setAnnualBilling(cur => !cur);
  }

  function handleBillingSelect(e) {
    const value = e.target.innerHTML;
    if (value === "Annually") setAnnualBilling(true);
    if (value === "Monthly") setAnnualBilling(false);
  }

  return (
    <header className=" container flex flex-col gap-10">
      <h1 className="text-[2rem] font-bold text-lightGray text-center ">
        Our Pricing
      </h1>

      <div className=" flex flex-row items-center mx-auto gap-6 mb-20">
        <span
          onClick={e => handleBillingSelect(e)}
          className="text-lightGray font-bold opacity-50 cursor-pointer"
        >
          Annually
        </span>

        <div
          onClick={handleBillingToggle}
          data-annual={annualBilling}
          className={`toggle`}
        ></div>

        <span
          onClick={e => handleBillingSelect(e)}
          className="text-lightGray font-bold opacity-50 cursor-pointer"
        >
          Monthly
        </span>
      </div>
    </header>
  );
}
