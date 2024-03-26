import { ButtonSection } from "./ButtonSection";
import { Section2Header } from "./header"

export const Section2 = () => {
    return (
      <div className="w-full h-full flex flex-col gap-10">
        <Section2Header />
        <div className="lg:mt-16 w-full line-animation"></div>
        <ButtonSection />
      </div>
    );
}