"use client";

import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

// type GLTFResult = GLTF & {
//     nodes: {
//         Door1: THREE.Mesh;
//     };
//     materials: {};
// };

type GLTFResult = GLTF & {
    nodes: {
        mesh_0: THREE.Mesh;
        mesh_0_1: THREE.Mesh;
        Cube013_Cube089: THREE.Mesh;
        Cube_Cube001: THREE.Mesh;
        Plane: THREE.Mesh;
    };
    materials: {};
    // animations: GLTFAction[]
};

type ContextType = Record<
    string,
    React.ForwardRefExoticComponent<JSX.IntrinsicElements["mesh"]>
>;

export default function NewModel(props: JSX.IntrinsicElements["group"]) {
    const { nodes, materials } = useGLTF("/models/door1.gltf") as GLTFResult;

    // Load your texture image (replace 'path/to/your/texture.jpg' with the actual path)
    const texture = new THREE.TextureLoader().load(
        "/kapilar/primerli/cift-renk/LMD 206-206-206 İTALYAN CEVİZ.png"
    );

    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(10, 5);

    const newMaterial = new THREE.MeshStandardMaterial({
        map: texture,
        toneMapped: false,
    });

    newMaterial.map!.onUpdate = () => {
        newMaterial.needsUpdate = true;
        return newMaterial;
    };

    return (
        <group
            {...props}
            dispose={null}
        >
            <mesh
                geometry={nodes.Cube013_Cube089.geometry}
                material={newMaterial}
            />
            <mesh
                geometry={nodes.Cube_Cube001.geometry}
                material={nodes.Cube_Cube001.material}
            />

            {/* <mesh
                geometry={nodes.mesh_0.geometry}
                material={nodes.mesh_0.material}
            /> */}
            <mesh
                geometry={nodes.mesh_0_1.geometry}
                material={nodes.mesh_0_1.material}
            />
        </group>
    );
}

useGLTF.preload("./models/door1.gltf");

// ("TEŞİR KAPAK MODELLERİ.gltf");
