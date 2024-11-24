const tabs = [
  {
    icon: "/assets/lottie/barbell.lottie",
    title: "User-friendly dashboard",
    isNew: false,
    backgroundPositionX: 0,
    backgroundPositionY: 0,
    backgroundSizeX: 150,
  },
  {
    icon: "/assets/lottie/health.lottie",
    title: "Workout Optimization",
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
    <section>
      <div className="container">
        <h2>Elevate your workouts</h2>
        <p>
          AI-powered fitness planner that customizes workout routines based on
          individual goals and preferences. It simplifies the process of workout
          planning by providing personalized suggestions, tracking progress, and
          adjusting plans as needed, making it easier for users to stay on track
          and reach their fitness objectives.
        </p>
        {tabs.map((tab) => (
          <div key={tab.title}></div>
        ))}
      </div>
    </section>
  );
};
