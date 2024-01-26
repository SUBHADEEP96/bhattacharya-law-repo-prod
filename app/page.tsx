"use client";
import Body from "./components/Body";
import Hero from "./components/Hero";
import client from "./sanity/client";
import withPopup from "../wrapper/withPopup";
import dynamic from "next/dynamic";
interface HomePageProps {
  userAccepted: boolean | null;
}

const HeroComponent = dynamic(() => import("./components/Hero"));
const BodyComponent = dynamic(() => import("./components/Body"), {
  loading: () => <p>Loading...</p>,
});

function Home() {
  return (
    <div className="container mx-auto px-5">
      <>
        <HeroComponent />
        <BodyComponent />
      </>
    </div>
  );
}
export default Home;
