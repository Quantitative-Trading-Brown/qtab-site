import Link from "next/link";
import Marquee from "react-fast-marquee";

export default function Home() {
  return (
    <div className="flex-grow items-center relative py-10">
      <div>
        <Marquee speed="200" className="text-5xl">
          Mathematicians. Innovators. Researchers. Traders. Developers.
          Thinkers. Creators. Learners. Coders. Statisticians. Builders.
          Teachers. Programmers. Quants. Scientists. Technologists. Engineers.&nbsp;
        </Marquee>
        <div className="flex mt-20 px-20 items-center">
          <div className="flex-grow p-10">
            <div className="flex flex-col justify-center items-center relative z-10 text-center p-5">
              <h1 className="text-5xl font-bold">
                Welcome to Quant Trading at Brown
              </h1>
              <p className="mt-4 text-xl w-[60%]">
                A club for math and CS enthusiasts dedicated to education,
                innovation, and growth.
              </p>
              <a
                href="/about"
                className="inline-block bg-black-600 border-[1px] border-white hover:bg-blue-700 text-white font-semibold py-3 px-6 mt-6 rounded-lg"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="p-7">
            <img src="/images/erc.jpg" alt="Brown ERC" />
          </div>
        </div>
      </div>
    </div>
  );
}
