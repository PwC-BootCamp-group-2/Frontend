import React from "react";
import EasyToUse from "./easytouse/EasyToUse";
import Features from "./features/Features";
import Hero from "./hero/Hero";
import Subscriptions from "./subscriptions/Subscriptions";
import WorkSpace from "./workspace/WorkSpace";

const HowItWorks = () => {
  return (
    <main>
      <Hero />
      <WorkSpace />
      <Features />
      <EasyToUse />
      <Subscriptions />
    </main>
  );
};

export default HowItWorks;
