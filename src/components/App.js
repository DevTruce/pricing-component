import Background from "./Background";
import Header from "./Header";

export default function App() {
  return (
    <>
      <Background />
      <main className="container flex flex-col mx-auto justify-center items-center">
        <Header />
      </main>
    </>
  );
}
