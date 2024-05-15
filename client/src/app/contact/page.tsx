import BlurCircle from "@/components/common/BlurCircle";
import ContactCard from "@/components/contact/Card";
import ContactSection from "@/components/contact/ContactSection";
import ContactHero from "@/components/contact/hero";
import Footer from "@/components/footer/Footer";
import MobileNavbar from "@/components/navbar/MobileNavbar";
import Navbar from "@/components/navbar/navbar";
import { Background } from "@/components/ui/Background";
import { contact } from "@/settings/contact";

const Contact = () => {
  return (
    <div className="w-screen max-w-[100vw] h-full overflow-x-hidden">
      <Navbar />
      <MobileNavbar />
      <div className="min-h-[150vh] h-fit w-full 2xl:px-52 xl:px-40 px-10 md:px-20 bg-black text-neutral-50 flex flex-col">
        <Background ClassName="min-h-screen lg:h-screen h-fit max-w-[100vw] px-0 md:px-0 flex flex-col justify-center gap-24 relative ">
          <ContactHero />
          <BlurCircle
            options={{ x: [0, -1000, 0], y: [0, 300, 0] }}
            className="right-52 top-52 size-40 blur-[200px]"
          />
          <BlurCircle
            options={{ x: [0, 1000, 0], y: [0, 5, 0] }}
            className="left-52 top-52 size-40 blur-[200px]"
          />
          <BlurCircle
            options={{ x: [0, 0, 0], y: [0, -300, 0] }}
            className="left-64 bottom-52 blur-[100px]"
          />
          <div className="flex justify-between w-full no-scrollbar overflow-x-auto gap-5 lg:gap-10 z-10">
            {contact.card.map((item, index) => (
              <ContactCard key={index + item.title} {...item} />
            ))}
          </div>
        </Background>
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
