"use client";

import * as THREE from "three";
import React, { useRef } from "react";
import { Loader, useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

type GLTFResult = GLTF & {
    nodes: {
        Suzanne: THREE.Mesh;
    };
    materials: {};
};

const Model = (props: JSX.IntrinsicElements["group"]) => {
    const gltf = useLoader(GLTFLoader, "/models/TEŞİR KAPAK MODELLERİ.gltf");

    return (
        <mesh>
            {gltf ? (
                <primitive
                    object={gltf.scene}
                    dispose={null}
                />
            ) : (
                <Loader />
            )}
            <meshBasicMaterial color="red" />
        </mesh>
    );
};

export default Model;

// const Model = (props: JSX.IntrinsicElements["group"]) => {
//     const { nodes, materials } = useGLTF(
//         "/models/TEŞİR KAPAK MODELLERİ.gltf"
//     ) as GLTFResult;
//     return (
//         <group
//             {...props}
//             dispose={null}
//         >
//             <mesh
//                 castShadow
//                 receiveShadow
//                 geometry={nodes.Suzanne.geometry}
//                 material={nodes.Suzanne.material}
//                 position={[0, 0.189, -0.043]}
//             />
//         </group>
//     );
// };

// useGLTF.preload("/models/TEŞİR KAPAK MODELLERİ.gltf");

/* ******************************* */

// const gltf = useLoader(GLTFLoader, "/models/TEŞİR KAPAK MODELLERİ.gltf");

//     return (
//        <>
// {gltf ? (
//     <primitive
//         object={gltf.scene}
//         dispose={null}
//     />
// ) : (
//     <Loader />
// )}
// </>
//     );
