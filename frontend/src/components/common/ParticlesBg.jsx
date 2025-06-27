import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadLinksPreset } from 'tsparticles-preset-links';

const ParticlesBackground = () => {
  const particlesInit = useCallback(async engine => {
    await loadLinksPreset(engine);
  }, []);

  const isDark = document.documentElement.classList.contains('dark');
  const particleColor = isDark ? '#2563eb' : '#1e40af'; 

  const isMobile = window.innerWidth < 640;
  const particleCount = isMobile ? 30 : 80; 


  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
            color: { value: "transparent" }
        },
        fullScreen: {
            enable: false
        },
        interactivity: {
            detectsOn: "canvas",
            events: {
                onHover: {
                    enable: true,
                    mode: ["attract", "trail"],
                    parallax: {
                        enable: true,
                        force: 120,
                        smooth: 10
                    }
                },
                resize: true
            },
            modes: {
                attract: {
                    distance: 400,
                    duration: 1,
                    speed: 4
                },
                trail: {
                    delay: 0.005,
                    quantity: 8, 
                    particles: {
                        size: {
                            value: 6,
                            random: false
                        },
                        move: {
                            speed: 3
                        }
                    }
                }
            }
        },
        particles: {
            number: {
                value: particleCount
            },
            color: {
                value: particleColor
            },
            links: {
                enable: true,
                distance: 200,
                color: particleColor,
                opacity: 0.5,
                width: 1
            },
            move: {
                enable: true,
                speed: 1.5, 
                direction: "none",
                outModes: {
                    default: "bounce"
                }
            },
            size: {
                value: 4,
                random: {
                    enable: true,
                    minimumValue: 4
                }
            },
            opacity: {
                value: 0.9
            }
        }
        }}

      className="absolute inset-0 z-0"
    />
  );
};

export default ParticlesBackground;
