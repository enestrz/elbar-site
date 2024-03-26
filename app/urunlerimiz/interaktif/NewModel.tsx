"use client";

import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { useEffect, useRef } from "react";

// type GLTFResult = GLTF & {
//     nodes: {
//         Door1: THREE.Mesh;
//     };
//     materials: {};
// };

// type GLTFResult = GLTF & {
//     nodes: {
//         mesh_0: THREE.Mesh;
//         mesh_0_1: THREE.Mesh;
//         Cube013_Cube089: THREE.Mesh;
//         Cube_Cube001: THREE.Mesh;
//         Plane: THREE.Mesh;
//     };
//     materials: {};
//     // animations: GLTFAction[]
// };

type GLTFResult = GLTF & {
    nodes: {
        Cube012_Cube088_1: THREE.Mesh;
        Cube012_Cube088_2: THREE.Mesh;
        Cube013_Cube089: THREE.Mesh;
        Cube_Cube001: THREE.Mesh;
        Plane: THREE.Mesh;
    };
    materials: {
        ["Material.076"]: THREE.MeshStandardMaterial;
        SUS: THREE.MeshStandardMaterial;
        floor: THREE.MeshStandardMaterial;
    };
    // animations: GLTFAction[]
};

type ContextType = Record<
    string,
    React.ForwardRefExoticComponent<JSX.IntrinsicElements["mesh"]>
>;

export default function NewModel(props: JSX.IntrinsicElements["group"]) {
    const { nodes, materials } = useGLTF("/door1.glb") as GLTFResult;
    const groupRef = useRef<THREE.Group>(null);

    // // Load your texture image (replace 'path/to/your/texture.jpg' with the actual path)
    // const texture = new THREE.TextureLoader().load(
    //     "/kapilar/primerli/cift-renk/LMD 206-206-206 İTALYAN CEVİZ.png"
    // );

    useEffect(() => {
        if (groupRef.current && materials.floor) {
            groupRef.current.traverse((obj) => {
                if (
                    obj instanceof THREE.Mesh &&
                    obj.material === materials.floor
                ) {
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

                    obj.material = newMaterial;
                }
            });
        }
    }, [materials.floor]);

    // texture.wrapS = THREE.RepeatWrapping;
    // texture.wrapT = THREE.RepeatWrapping;
    // texture.repeat.set(10, 5);

    // const newMaterial = new THREE.MeshStandardMaterial({
    //     map: texture,
    //     toneMapped: false,
    // });

    // newMaterial.map!.onUpdate = () => {
    //     newMaterial.needsUpdate = true;
    //     return newMaterial;
    // };

    return (
        <group
            ref={groupRef}
            {...props}
            dispose={null}
        >
            <group rotation={[Math.PI / 2, 0, 0]}>
                {/* <mesh
                    geometry={nodes.Cube012_Cube088_1.geometry}
                    material={materials["Material.076"]}
                /> */}
                <mesh
                    geometry={nodes.Cube012_Cube088_2.geometry}
                    material={materials.SUS}
                />
            </group>
            <mesh
                geometry={nodes.Cube013_Cube089.geometry}
                material={materials.floor}
                rotation={[Math.PI / 2, 0, 0]}
            />
            <mesh
                geometry={nodes.Cube_Cube001.geometry}
                material={materials.SUS}
                rotation={[Math.PI / 2, 0, 0]}
            />
            {/* <mesh
                geometry={nodes.Plane.geometry}
                material={materials.floor}
                rotation={[Math.PI / 2, 0, 0]}
            /> */}
        </group>
    );
}

useGLTF.preload("/door1.glb");

// ("TEŞİR KAPAK MODELLERİ.gltf");
