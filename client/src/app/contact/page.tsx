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
    <div className="h-full w-screen max-w-[100vw] overflow-x-hidden">
      <Navbar />
      <MobileNavbar />
      <div className="flex h-fit min-h-dvh w-full flex-col bg-black px-10 text-neutral-50 xl:px-20 2xl:px-52">
        <Background ClassName="min-h-fit h-fit max-w-[100vw] flex flex-col justify-center gap-24 relative sm:px-0 md:px-4 xl:px-20">
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
            className="bottom-52 left-64 blur-[100px]"
          />
          <div className="no-scrollbar z-10 flex h-full w-full flex-col justify-between gap-5 overflow-x-auto lg:flex-row lg:gap-10">
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
