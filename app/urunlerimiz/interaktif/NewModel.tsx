import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
    nodes: {
        Suzanne: THREE.Mesh;
    };
    materials: {};
};

type ContextType = Record<
    string,
    React.ForwardRefExoticComponent<JSX.IntrinsicElements["mesh"]>
>;

export default function NewModel(props: JSX.IntrinsicElements["group"]) {
    const { nodes, materials } = useGLTF("/models/suzanne.gltf") as GLTFResult;

    // Load your texture image (replace 'path/to/your/texture.jpg' with the actual path)
    const texture = new THREE.TextureLoader().load(
        "/kapilar/primerli/cift-renk/LMD 261-261-261 BAL TEAK.jpg"
    );

    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(11, 14);

    // Create a new material with the loaded texture
    const newMaterial = new THREE.MeshStandardMaterial({
        map: texture,

        // color: 0xffffff, // White color, ensuring no color multiplication
    });

    return (
        <group
            {...props}
            dispose={null}
        >
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Suzanne.geometry}
                material={newMaterial}
            />
        </group>
    );
}

useGLTF.preload("/models/suzanne.gltf");

("TEŞİR KAPAK MODELLERİ.gltf");
