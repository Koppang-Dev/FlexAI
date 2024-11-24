// app/landingPage/Header.jsx
import Link from "next/link";
import { Button } from "@/components/Button";

const Header = () => {
  return (
    <header className="py-4 border-b border-white/15 md:border-none">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex justify-between items-center md:border border-white/15 md:p-2.5 rounded-xl">
          <div>
            <span>logo</span>
          </div>
          {/* Nav Items to be displayed on the header */}
          <div className="hidden md:block">
            <nav className="flex gap-8 text-sm">
              <a href="#" className="text-white/70 hover:text-white transition">
                Features
              </a>
              <a href="#" className="text-white/70 hover:text-white transition">
                Developers
              </a>
              <a href="#" className="text-white/70 hover:text-white transition">
                Pricing
              </a>
              <a href="#" className="text-white/70 hover:text-white transition">
                Change Log
              </a>
            </nav>
          </div>
          <div className="flex gap-4 items-center">
            <Link href="/signup">
              <Button>Register</Button>
            </Link>
            c<span>menu</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
