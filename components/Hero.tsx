import { home } from "./Float/config";
import Float from "./Float/Float";
import { SectionLayout } from "./Layout";
import SplitText from "./SplitText/SplitText";
import { Heading, SubHeading } from "./Typography";

export default function Home() {
  return (
    <SectionLayout className="overflow-hidden">
      <div className="md:max-w-2/3 flex w-full flex-col items-center space-y-11">
        <SubHeading dark>
          <span className="font-bold">Hello! </span>My name is
        </SubHeading>

        <Heading dark className="text-center font-extrabold">
          <SplitText text="Mahidhar" />
          <SplitText text="Reddy" />
          <SplitText text="Vaka" />
        </Heading>

        <p className="text-center md:whitespace-pre-line">
          {`Dedicated software developer with hands-on experience in full-stack development, cloud computing, and CI/CD practices. Proficient in JavaScript and TypeScript, with a specialization in React for creating engaging user interfaces. Skilled in crafting inventive software solutions, tailoring them to meet both user requirements and technical complexities. Well-versed in cloud computing, particularly AWS, and experienced in containerization with Docker, ensuring seamless deployment and scalability. Committed to continuous professional growth, I am eager to contribute my expertise to dynamic technology teams, driving innovation and achieving exceptional results`}
        </p>
      </div>
      <Float config={home} />
    </SectionLayout>
  );
}
