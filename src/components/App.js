import { useState } from "react";

import CardList from "./CardList";
import Header from "./Header";

export default function App() {
  const [annualBilling, setAnnualBilling] = useState(false);

  return (
    <>
      <main className="container flex flex-col mx-auto justify-center items-center pt-16 pb-16">
        <Header
          annualBilling={annualBilling}
          setAnnualBilling={setAnnualBilling}
        />
        <CardList annualBilling={annualBilling} />
      </main>
    </>
  );
}
