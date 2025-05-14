import { useState } from "react";

import CardList from "./CardList";
import Header from "./Header";

export default function App() {
  const [annualBilling, setAnnualBilling] = useState(false);

  return (
    <div
      className="
    bg-no-repeat 
    bg-[url('./images/bg-top.svg')] 
    bg-[position:right_-12rem_top_-2rem]
    lg:bg-[url('./images/bg-top.svg'),url('./images/bg-bottom.svg')] 
    lg:bg-[position:right_top,left_bottom]
"
    >
      <main className="container flex flex-col mx-auto justify-center items-center pt-16 pb-16">
        <Header
          annualBilling={annualBilling}
          setAnnualBilling={setAnnualBilling}
        />
        <CardList annualBilling={annualBilling} />
      </main>
    </div>
  );
}
