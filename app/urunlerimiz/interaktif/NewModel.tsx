import { Canvas, useLoader } from "@react-three/fiber";
import { Suspense } from "react";
import { TextureLoader } from "three";

export default function NewModel() {
    const texture = useLoader(TextureLoader, "/textures/door/color.jpg");

    return (
        <Canvas
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
            <Suspense>
                <ambientLight intensity={0.2} />
                <directionalLight />
                <mesh>
                    <boxGeometry args={[1, 1, 1]} />
                    <meshStandardMaterial map={texture} />
                </mesh>
            </Suspense>
        </Canvas>
    );
}
