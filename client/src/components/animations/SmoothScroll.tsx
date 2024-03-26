"use client";
import { ReactLenis } from "@studio-freight/react-lenis";

type SmoothScrollProps = {
    children: React.ReactNode;
}

function SmoothScroll({children}: SmoothScrollProps) {

    const options = {
        lerp: 0.1,
        smooth: true,
        smoothMobile: true,
        offset: 0,
        speed: 1000,
        updateURL: true,
    };

  return <ReactLenis root>{children}</ReactLenis>;
}

export default SmoothScroll;
