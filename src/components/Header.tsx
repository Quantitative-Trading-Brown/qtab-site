"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
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
              className="h-[5em]"
            />
          </Link>
        </div>

        <nav className="flex space-x-6">
          {Object.entries(siteLinks).map(([path, name]) => (
            <Link
              key={name}
              href={path}
              className="underline-offset-[7px]"
              rel="noopener noreferrer"
            >
              {thisPath == path ? <u>{name}</u> : <>{name}</>}
            </Link>
          ))}

          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLSdvymh0QrCLnqUdC4NeC7qVTdYzAei0YQ-sRbf1nf6D3nJVZQ/viewform?usp=sf_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resumes
          </Link>

          <div className="relative group">
            <button className="group">Resources</button>
            <div
              className="hidden group-hover:flex hover:flex flex-col 
              bg-white text-black rounded absolute p-2 z-20 w-[10em]"
            >
              <Link
                href="https://youtube.com/playlist?list=PLQIIHL3oP4cxA502sW5YI8czUOAZB73Bn&si=kSp9CzEBrXrnenqy"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                YouTube
              </Link>
              <Link
                href="https://drive.google.com/drive/folders/1JKFoOhp-BZCPp1alMZEm8JxqTRaBVdlO?usp=share_link"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                Google Drive
              </Link>
            </div>
          </div>

          <Link
            href="https://browninvestmentgroup.co"
            target="_blank"
            rel="noopener noreferrer"
          >
            BIG
          </Link>
          <Link
            href="mailto:quant@brown.edu"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
