import React, { useEffect, useMemo, useState } from "react";

import Particles, { initParticlesEngine } from "@tsparticles/react";
import { type Container, type ISourceOptions } from "@tsparticles/engine";
// import { loadAll } from "@tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "@tsparticles/slim";

const ParticlesComponent = () => {
    const [init, setInit] = useState(false);

    // this should be run only once per application lifetime
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
            // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
            // starting from v2 you can add only the features you need reducing the bundle size
            //await loadAll(engine);
            //await loadFull(engine);
            await loadSlim(engine);
            //await loadBasic(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = async (container?: Container): Promise<void> => {
        console.log(container);
    };

    const options: ISourceOptions = useMemo(
        () => ({
            fullScreen: {
                enable: false,
            },
            key: "absorbers",
            name: "Absorbers",
            particles: {
                number: {
                    value: 200,
                },
                collisions: {
                    enable: true,
                },
                color: {
                    value: "#ffffff",
                },
                shape: {
                    type: "circle",
                },
                opacity: {
                    value: {
                        min: 0.1,
                        max: 1,
                    },
                },
                size: {
                    value: {
                        min: 1,
                        max: 2,
                    },
                },
                move: {
                    enable: true,
                    speed: 0.5,
                    direction: "bottom",
                    straight: true,
                    warp: true,
                },
            },
            interactivity: {
                events: {
                    onClick: {
                        enable: true,
                        mode: "push",
                    },
                },
                modes: {
                    push: {
                        quantity: 10,
                    },
                },
            },
            absorbers: {
                draggable: true,
                size: {
                    value: {
                        min: 5,
                        max: 10,
                    },
                    limit: 10,
                },
                position: {
                    x: 50,
                    y: 50,
                },
            },
        }),
        []
    );

    if (init)
        return (
            <Particles
                id="tsparticles-custom"
                particlesLoaded={particlesLoaded}
                options={options}
                className="w-full h-screen absolute top-0 left-0 -z-50"
            />
        );
};

export default ParticlesComponent;
