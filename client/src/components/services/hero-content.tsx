import Image from "next/image";
import DeliverLogo from "@/assets/animated/Deliver";
import DesignLogo from "@/assets/animated/Desing";
import DevelopIcon from "@/assets/animated/Develop";
import { cn } from "@/lib/utils";

function ServiceHeroContent({ className }: { className?: string }) {
  return (
    <section className={cn("relative", className)}>
      <Image
        src="/images/services/hero-banner-bg.gif"
        alt="dsd"
        sizes="100vw"
        className="w-2/6 object-contain"
        fill
      />
      <div className="absolute inset-0">
        <div className="flex h-full flex-col justify-between">
          <div aria-hidden="true" />
          <h1 className="inline-block bg-gradient-to-r from-gray-400 to-neutral-600 bg-clip-text text-center text-[min(15vw,13.75rem)] font-medium leading-[1.20] text-transparent">
            Humanise Technology
          </h1>
          <div className="flex w-full flex-col justify-between gap-4 px-4 sm:flex-row sm:gap-0 md:px-10 lg:px-20 sm:mb-2 2xl:mb-0">
            <p className="text-white sm:w-4/6 lg:w-[60%] 2xl:w-[50%]">
              We turn problems into opportunities with creative tech solutions.
              Our passion, blending innovation and imagination for amazing
              results.
            </p>
            <div className="flex justify-center gap-4">
              <DevelopIcon className="size-14" />
              <DesignLogo className="size-14" />
              <DeliverLogo className="size-14" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServiceHeroContent;
