// app/page.js
import Header from "./landingPage/Header.jsx";
import { Hero } from "./landingPage/Hero.jsx";
import { Features } from "./landingPage/Features.jsx";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Features />
    </>
  );
}
