"use client";
import withPopup from "../wrapper/withPopup";
import dynamic from "next/dynamic";
import CustomLoader from "./components/CustomLoader";

const HeroComponent = dynamic(() => import("./components/Hero"));
const BodyComponent = dynamic(() => import("./components/Body"), {
  loading: () => <CustomLoader />,
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
export default withPopup(Home);
