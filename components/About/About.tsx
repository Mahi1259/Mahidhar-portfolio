import { useEffect, useState } from "react";
import { about } from "../Float/config";
import Float from "../Float/Float";
import { SectionLayout } from "../Layout";
import { Heading, SubHeading } from "../Typography";
import { Align } from "../Typography/types";
import MobileTechList from "./MobileTechList";
import TechList from "./TechList";

export default function About() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <SectionLayout className="w-full items-start">
      <div className="md:max-w-2/3 mb-20 flex w-full flex-col items-center space-y-4 text-sm md:space-y-11 md:pb-0 md:text-lg">
        <SubHeading dark align={Align.Left}>
          About
        </SubHeading>

        <Heading size="xs" dark className="font-extrabold">
        Dedicated software developer with hands-on experience in full-stack development, cloud computing, and CI/CD practices. 
        Proficient in JavaScript and TypeScript, with a specialization in React for creating engaging user interfaces. Skilled in crafting inventive software solutions, tailoring them to meet both user requirements and technical complexities.
         Well-versed in cloud computing, particularly AWS, and experienced in containerization with Docker, ensuring seamless deployment and scalability. Committed to continuous professional growth, 
        I am eager to contribute my expertise to dynamic technology teams, driving innovation and achieving exceptional results.
        </Heading>
      </div>
      <Float config={about} />
    </SectionLayout>
  );
}
