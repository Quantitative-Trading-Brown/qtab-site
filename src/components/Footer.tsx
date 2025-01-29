"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Footer = () => {
  const thisPath = usePathname();

  const siteLinks = {
    "/": "Home",
    "/events": "Events",
    "/team": "Team",
    "/sponsors": "Sponsors",
  };

  return (
    <header className="bg-black text-white">
      <div className="container flex items-center justify-between py-4 px-10">
        <div>
          <Link href="/">
            <img
              src="/images/logo.png"
              alt="Quantitative Trading at Brown"
              className="h-10"
            />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Footer;
