import { Button } from "@/components/Button";

export const Hero = () => {
  return (
    <section className="h-[492px]">
      <div className="container"></div>
      <h1 className="text-8xl font-semibold tracking-tighter bg-white bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138,.5))] text-transparent bg-clip-text text-center">
        AI Workout Planner and Tracker
      </h1>
      <p className="text-lg text-white/70 mt-5 text-center">
        An AI-powered fitness planner that generates personalized workout plans
        based on individual goals and progress, helping users stay on track and
        motivated.
      </p>
      <div className="flex justify-center mt-5">
        <Button>Join Waitlist</Button>
      </div>
    </section>
  );
};
