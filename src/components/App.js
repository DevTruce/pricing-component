import Background from "./Background";
import Card from "./Card";
import Header from "./Header";

export default function App() {
  return (
    <>
      <Background />
      <main className="container flex flex-col mx-auto justify-center items-center">
        <Header />
        <Card
          tier="Basic"
          cost="199.99"
          feature1="500 GB Storage"
          feature2="2 Users Allowed"
          feature3="Send up to 3 GB"
        />
        <Card
          tier="Professional"
          cost="249.99"
          feature1="1 TB Storage"
          feature2="5 Users Allowed"
          feature3="Send up to 10 GB"
        />
        <Card
          tier="Master"
          cost="399.99"
          feature1="2 TB Storage"
          feature2="10 Users Allowed"
          feature3="Send up to 20 GB"
        />
      </main>
    </>
  );
}
