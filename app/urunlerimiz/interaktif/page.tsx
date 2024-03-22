"use client";

import { Canvas } from "@react-three/fiber";
import Model from "./Model";
import { OrbitControls, Stage } from "@react-three/drei";
import { Suspense, useRef } from "react";
import LoadingScreen from "./LoadingScreen";
import NewModel from "./NewModel";

export default function InteraktifPage() {
    // @ts-ignore
    const ref = useRef(null);
    return (
        <section className="card w-full sm:ml-8 rounded">
            <Canvas
                dpr={[1, 2]}
                camera={{ fov: 50 }}
                frameloop="demand"
            >
                <Suspense fallback={<LoadingScreen />}>
                    <Stage
                        // @ts-ignore
                        controls={ref}
                        intensity={0.1}
                        environment="city"
                        // preset="upfront"
                    >
                        <NewModel />
                    </Stage>
                </Suspense>
                <OrbitControls ref={ref} />
            </Canvas>
        </section>
    );
}

("/models/TEŞİR KAPAK MODELLERİ.gltf");
