import Link from "next/link";
export default function Home() {
  return (
    <div className="flex flex-col flex-grow items-center relative">
      <div className="p-10 flex flex-col items-center mx-[5em]">
        <div className="text-3xl font-bold">Where to Find Us</div>
        <div className="w-[90%] text-xl p-7 text-center">
          QTAB meetings are open to all Brown University students. Subscribe to{" "}
          <Link
            href="https://listserv.brown.edu/cgi-bin/wa?A0=QUANT"
            className="underline-offset-[7px]"
            target="_blank"
            rel="noopener noreferrer"
          >
            <u>our mailing list</u>
          </Link>{" "}
          to receive updates on club meetings, information, and opportunities.
        </div>
      </div>

      <div className="p-7 flex flex-col items-center">
        <div className="text-3xl font-bold">What we do</div>
        <div className="flex justify-center items-center">
          <Wedo
            image="/images/education.jpeg"
            text="Education"
            description="
            Weekly meetings involve an 
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
            Our researchers analyze 
            market information and formulate strategies. 
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
      <div className="flex-grow flex text-left items-end p-4 px-20">
        The content of UCS/GSC recognized student organization websites is
        generated independently from Brown University. The statements, views,
        opinions, and information contained on the site are personal to those of
        the authors and student organization and do not necessarily reflect
        those of Brown University. The content on the site is not reviewed,
        approved, or endorsed by Brown University or its faculty or staff.
      </div>
    </div>
  );
}

type WedoParams = {
  image: string;
  text: string;
  description: string;
};

const Wedo = ({ image, text, description }: WedoParams) => {
  return (
    <div className="flex flex-col items-center p-6 w-[33%]">
      <img src={image} className="w-[40%]" />
      <div className="font-semibold text-lg">{text}</div>
      <div className="text-center">{description}</div>
    </div>
  );
};
