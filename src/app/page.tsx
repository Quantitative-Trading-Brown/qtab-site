import Link from "next/link";
export default function Home() {
  return (
    <div className="flex-grow items-center relative py-20">
      <div>
        <div className="overflow-hidden whitespace-nowrap relative py-4">
          <div className="flex animate-marquee">
            <span className="mr-8 text-5xl">
              Mathematicians. Innovators. Researchers. Traders. Developers.
              Thinkers. Creators. Learners. Coders. Statisticians. Builders.
              Teachers. Programmers. Quants. Scientists. Technologists.
              Engineers.
            </span>
            <span className="mr-8 text-5xl">
              Mathematicians. Innovators. Researchers. Traders. Developers.
              Thinkers. Creators. Learners. Coders. Statisticians. Builders.
              Teachers. Programmers. Quants. Scientists. Technologists.
              Engineers.
            </span>
          </div>
        </div>
        <div className="flex mt-10 px-20">
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
      <div className="p-7 my-10 flex flex-col items-center mx-[5em]">
        <div className="text-5xl">Where to Find Us</div>
        <div className="w-[90%] text-xl p-7 text-center">
          QTAB meetings are open to all Brown University students. Join us every
          Tuesday @ 7-9 p.m. in Salomon 203! Subscribe to{" "}
          <Link
            href="https://listserv.brown.edu/cgi-bin/wa?A0=QUANT"
            className="underline-offset-[7px]"
            target="_blank"
            rel="noopener noreferrer"
          >
          <u>our mailing list</u>
          </Link>{" "}
          to receive updates, information, and opportunities.
        </div>
      </div>

      <div className="p-7 flex flex-col items-center">
        <div className="text-5xl">What we do</div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          <Wedo
            image="/images/education.jpeg"
            text="Education"
            description="
            Weekly meetings in QTAB involve an 
            education session on a topic within quantitative finance. 
            Past sessions have included lessons on Statistical 
            Modeling, Machine Learning, Graph Theory, 
            and Optimization Techniques. 
            "
          />
          <Wedo
            image="/images/research.jpeg"
            text="Research"
            description="
            The research committee meets regularly to analyze 
            market information and formulate strategies to trade our capital. 
            We have conducted research across various asset classes 
            including equities, currencies, and crypto.
            "
          />
          <Wedo
            image="/images/events.jpg"
            text="Events"
            description="
            We host Trading, Market Making, and Data Games. 
              These opportunities allow our members to test
            their skills in a team-based, competitive environment.
            "
          />
        </div>
      </div>
    </div>
  );
}

type WedoParams = {
  image: string,
  text: string,
  description: string
}

const Wedo = ({ image, text, description }: WedoParams) => {
  return (
    <div className="flex flex-col items-center p-6 h-[30em]">
      <img src={image} className="w-[70%]" />
      <div className="font-semibold text-lg">{text}</div>
      <div className="text-center">{description}</div>
    </div>
  );
};
