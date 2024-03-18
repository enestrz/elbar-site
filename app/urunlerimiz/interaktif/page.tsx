"use client";

import { Canvas } from "@react-three/fiber";
import Model from "./Model";
import { OrbitControls, Stage } from "@react-three/drei";
import { Suspense, useRef } from "react";
import LoadingScreen from "./LoadingScreen";
import NewModel from "./NewModel";

export default function InteraktifPage() {
    const ref = useRef();
    return (
        <section className="card w-full sm:ml-8 rounded">
            <Canvas
                shadows
                dpr={[1, 2]}
                camera={{ fov: 50 }}
            >
                <Suspense fallback={<LoadingScreen />}>
                    <Stage
                        // controls={ref}
                        intensity={1}
                    >
                        <NewModel />
                    </Stage>
                </Suspense>
                <OrbitControls
                //  ref={ref}
                />
            </Canvas>
        </section>
    );
}

("/models/TEŞİR KAPAK MODELLERİ.gltf");
