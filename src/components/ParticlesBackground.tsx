import { useCallback } from "react";
import Particles from "react-particles";
import type { Container, Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";

export function ParticlesBackground() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Subtle Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2b1055] via-[#7597de] to-[#3b82f6] opacity-20"></div>
      
      {/* Particle Effect */}
      <Particles
        className="absolute inset-0"
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: "transparent" },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: { enable: true, mode: "push" },
              onHover: { enable: true, mode: "bubble", parallax: { enable: true, force: 60, smooth: 10 } },
              resize: true,
            },
            modes: {
              push: { quantity: 3 },
              bubble: { distance: 150, duration: 1, size: 6, opacity: 0.3 },
              repulse: { distance: 100, duration: 0.5 },
            },
          },
          particles: {
            color: { value: ["#ff007f", "#00c4ff", "#ffaa00", "#6d28d9"] },
            links: { color: "#ffffff", distance: 120, enable: true, opacity: 0.3, width: 1 },
            move: {
              enable: true,
              speed: { min: 0.5, max: 2 },
              direction: "none",
              random: true,
              outModes: { default: "out" },
              attract: { enable: true, rotateX: 600, rotateY: 1200 },
            },
            number: { density: { enable: true, area: 800 }, value: 60 },
            opacity: { value: { min: 0.1, max: 0.5 }, animation: { enable: true, speed: 0.4, minimumValue: 0.1, sync: false } },
            shape: { type: ["circle", "triangle", "star","square"] },
            size: { value: { min: 2, max: 4 }, animation: { enable: true, speed: 0.5, minimumValue: 0.2, sync: false } },
            twinkle: { particles: { enable: true, frequency: 0.05, opacity: 0.5 } },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
}






