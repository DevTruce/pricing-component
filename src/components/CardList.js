import Card from "./Card";

export default function CardList({ annualBilling }) {
  const cards = [
    {
      tier: "Basic",
      monthlyCost: 19.99,
      yearlyCost: 199.99,
      feature1: "500 GB Storage",
      feature2: "2 Users Allowed",
      feature3: "Send up to 3 GB",
      bestValue: false,
    },
    {
      tier: "Professional",
      monthlyCost: 24.99,
      yearlyCost: 249.99,
      feature1: "1 TB Storage",
      feature2: "5 Users Allowed",
      feature3: "Send up to 10 GB",
      bestValue: true,
    },
    {
      tier: "Master",
      monthlyCost: 39.99,
      yearlyCost: 399.99,
      feature1: "2 TB Storage",
      feature2: "10 Users Allowed",
      feature3: "Send up to 20 GB",
      bestValue: false,
    },
  ];
  return (
    <div className=" flex flex-col lg:flex-row">
      <Card card={cards[0]} annualBilling={annualBilling} />
      <Card card={cards[1]} annualBilling={annualBilling} />
      <Card card={cards[2]} annualBilling={annualBilling} />
    </div>
  );
}
