import Link from "next/link";
export default function Home() {
  return (
    <div className="flex-grow items-center relative py-10">
      <div>
        <div className="overflow-hidden whitespace-nowrap py-4">
          <div className="flex animate-marquee">
            <span className="text-5xl">
              Mathematicians. Innovators. Researchers. Traders. Developers.
              Thinkers. Creators. Learners. Coders. Statisticians. Builders.
              Teachers. Programmers. Quants. Scientists. Technologists.
              Engineers. Mathematicians. Innovators. Researchers. Traders. Developers.
              Thinkers. Creators. Learners. Coders. Statisticians. Builders.
              Teachers. Programmers. Quants. Scientists. Technologists.
              Engineers.
            </span>
          </div>
        </div>
        <div className="flex mt-20 px-20 items-center">
          <div className="p-10">
            <div className="flex flex-col justify-center items-center relative z-10 text-center p-5">
              <h1 className="text-5xl font-bold">
                Welcome to Quantitative Trading at Brown
              </h1>
              <p className="mt-4 text-xl w-[80%]">
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
