"use client";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import productImage from "@/app/assets/images/darkGym.png";
import Image from "next/image";

const tabs = [
  {
    icon: "/assets/lottie/barbell.lottie",
    title: "User-friendly dashboard",
    isNew: true,
    backgroundPositionX: 0,
    backgroundPositionY: 0,
    backgroundSizeX: 150,
  },
  {
    icon: "/assets/lottie/time.lottie",
    title: "Workout Optimization",
    isNew: true,
    backgroundPositionX: 98,
    backgroundPositionY: 100,
    backgroundSizeX: 135,
  },
  {
    icon: "/assets/lottie/lift.lottie",
    title: "Smart Workout Logger and Generator",
    isNew: true,
    backgroundPositionX: 100,
    backgroundPositionY: 27,
    backgroundSizeX: 177,
  },
];

export const Features = () => {
  return (
    <section className="py-20 md:py-24">
      <div className="container">
        <h2 className="text-5xl md:text-6xl font-medium text-center tracking-tighter">
          Elevate your workouts
        </h2>
        <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto tracking-tight text-center mt-5">
          AI-powered fitness planner that customizes workout routines based on
          individual goals and preferences. It simplifies the process of workout
          planning by providing personalized suggestions, tracking progress, and
          adjusting plans as needed, making it easier for users to stay on track
          and reach their fitness objectives.
        </p>
        <div className="mt-10 flex flex-col lg:flex-row gap-3">
          {tabs.map((tab) => (
            <div
              key={tab.title}
              className="border border-white/15 flex p-2.5 rounded-xl gap-2.5 items-center lg:flex-1"
            >
              <div className="h-12 w-12 border border-white/15 rounded-lg inline-flex items-center justify-center">
                <DotLottieReact
                  src={tab.icon}
                  className="h-20 w-20"
                  autoplay
                  loop
                />
              </div>
              <div className="font-medium">{tab.title}</div>
              {tab.isNew && (
                <div className="text-xs rounded-full px-2 py-0.5 bg-[#8c44ff] text-black font-semibold">
                  new
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="relative overflow-hidden border border-white/20 p-2.5 rounded-xl mt-3">
          <div
            className="aspect-video bg-cover border border-white/20 rounded-lg"
            style={{
              backgroundImage: `url(${productImage.src})`,
              WebkitMaskImage: "linear-gradient(to bottom, transparent, black)",
              maskImage: "linear-gradient(to bottom, transparent, black)",
            }}
          ></div>
        </div>
      </div>
    </section>
  );
};
