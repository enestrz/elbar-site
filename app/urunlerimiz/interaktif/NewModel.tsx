import { Canvas, useLoader } from "@react-three/fiber";
import { Suspense, use, useEffect, useState } from "react";
import { TextureLoader } from "three";
import { Stats, OrbitControls } from "@react-three/drei";

const Scene = ({ selectedDoor }: { selectedDoor: string }) => {
    const texture = useLoader(TextureLoader, selectedDoor);
    return (
        <>
            <ambientLight intensity={0.2} />
            <directionalLight />
            <mesh>
                <boxGeometry args={[1, 1, 1]} />
                <meshLambertMaterial map={texture} />
            </mesh>
        </>
    );
};

export default function NewModel({ selectedDoor }: { selectedDoor: string }) {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, [selectedDoor]);

    if (!isLoaded) {
        return null;
    }

    return (
        <div className="w-full max-h-[500px]">
            <Canvas
                camera={{ position: [0, 0, 5] }}
                gl={{
                    antialias: true,
                    precision: "highp",
                    powerPreference: "high-performance",
                    stencil: false,
                    depth: false,
                    alpha: true,
                    premultipliedAlpha: true,
                }}
            >
                <Suspense fallback={null}>
                    <Scene selectedDoor={selectedDoor} />
                </Suspense>
                <OrbitControls />
                {/* <Stats /> */}
            </Canvas>
        </div>
    );
}
