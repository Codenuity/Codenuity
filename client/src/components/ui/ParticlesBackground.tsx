"use client";
import { useCallback, useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { Container, Engine } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

const ParticlesBackground = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);


  return (
    <>
      {init && (
        <Particles
          id="tsparticles"
          style={{
            backgroundColor:"black",
          }}
          options={{
            particles: {
              number: {
                value: 160,
                density: {
                  enable: true,
                },
              },
              color: {
                value: "#ffffff",
              },
              shape: {
                type: "star",
              },
              opacity: {
                value: 1,
              },
              size: {
                value: 0.4,
              },
              line_linked: {
                enable: false,
                distance: 150,
                color: "#ffffff",
                opacity: 0.4,
                width: 1,
              },
              move: {
                enable: false,
                speed: 1,
                direction: "none",
                random: true,
                straight: false,
                attract: {
                  enable: true,
                },
              },
            },
            interactivity: {
              detect_on: "canvas",
              modes: {
                grab: {
                  distance: 400,
                  line_linked: {
                    opacity: 1,
                  },
                },
                bubble: {
                  distance: 48.724632738080714,
                  size: 0,
                  duration: 5,
                  opacity: 1,
                  speed: 3,
                },
                repulse: {
                  distance: 400,
                  duration: 0.4,
                },
                push: {
                  particles_nb: 4,
                },
                remove: {
                  particles_nb: 2,
                },
              },
            },
            retina_detect: true,
          }}
        />
      )}
    </>
  );
};

export default ParticlesBackground;
