export default function Home() {
  return (
    <div className="flex-grow items-center relative py-20">
      <div className="overflow-hidden whitespace-nowrap relative py-4">
        <div className="flex animate-marquee">
          <span className="mr-8 text-5xl">
            Mathematicians. Innovators. Researchers. Traders. Developers. Thinkers. Creators. Learners. 
            Coders. Statisticians. Builders. Teachers. Programmers. Quants. Scientists. Technologists. Engineers.
          </span>
          <span className="mr-8 text-5xl">
            Mathematicians. Innovators. Researchers. Traders. Developers. Thinkers. Creators. Learners. 
            Coders. Statisticians. Builders. Teachers. Programmers. Quants. Scientists. Technologists. Engineers.
          </span>
        </div>
      </div>
      <div className="flex mt-10">
        <div className="p-10">
          <div className="flex flex-col items-center relative z-10 text-center p-5">
            <h1 className="text-5xl font-bold">
              Welcome to Quantitative Trading at Brown
            </h1>
            <p className="mt-4 text-xl w-[75%]">
              A student-run quantitative fund dedicated to education,
              innovation, and growth.
            </p>
            <a
              href="/"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 mt-6 rounded-lg"
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
  );
}
