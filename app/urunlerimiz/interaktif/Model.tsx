"use client";

import { Suspense, useEffect, useRef } from "react";
import * as THREE from "three";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

export default function Model({ selectedDoor }: { selectedDoor: string }) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (!canvasRef.current || !containerRef.current) return;

        // Scene
        const scene = new THREE.Scene();

        // Camera
        const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
        camera.position.z = 3;

        const light = new THREE.AmbientLight(0xffffff, 2.5); // soft white light
        light.castShadow = true;
        scene.add(light);

        // Renderer
        const renderer = new THREE.WebGLRenderer({
            canvas: canvasRef.current,
            antialias: true,
            alpha: true,
            powerPreference: "high-performance",
            stencil: true,
            depth: false,
            precision: "highp",
        });
        renderer.outputColorSpace = THREE.SRGBColorSpace;
        renderer.setClearColor(0x000000, 0);
        renderer.toneMapping = THREE.ReinhardToneMapping;
        renderer.setPixelRatio(window.devicePixelRatio);
        resizeRendererToDisplaySize(renderer);
        containerRef.current.appendChild(renderer.domElement);

        const doorWidth = 1;
        const doorHeight = 2;
        const doorDepth = 0.1;

        const geometry = new THREE.BoxGeometry(
            doorWidth,
            doorHeight,
            doorDepth,
            32,
            32,
            32
        );

        // Add bevels to the door
        const bevelSize = 0.05;
        const positionAttribute = geometry.getAttribute("position");
        for (let i = 0; i < positionAttribute.count; i++) {
            const vertex = new THREE.Vector3();
            vertex.fromBufferAttribute(positionAttribute, i);
            if (vertex.y === doorHeight / 2) {
                vertex.x += bevelSize;
                vertex.z += bevelSize;
            }
            if (vertex.y === -doorHeight / 2) {
                vertex.x -= bevelSize;
                vertex.z -= bevelSize;
            }
        }

        const material = new THREE.MeshLambertMaterial({
            map: new THREE.TextureLoader().load(selectedDoor, (t) => {
                t.colorSpace = THREE.DisplayP3ColorSpace;
                // t.wrapS = t.wrapT = THREE.RepeatWrapping;
                t.premultiplyAlpha = true;
                t.flipY = true;
                t.anisotropy = renderer.capabilities.getMaxAnisotropy();
            }),
        });

        material.toneMapped = false;
        material.bumpScale = 0.05;
        material.map!.onUpdate = () => {
            material.needsUpdate = true;
            return material;
        };

        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);

        // Orbit controls
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.update();

        // Animation loop
        const animate = () => {
            requestAnimationFrame(animate);

            renderer.render(scene, camera);
        };

        animate();

        // Resize handling
        function resizeRendererToDisplaySize(renderer: THREE.WebGLRenderer) {
            const canvas = renderer.domElement;
            const width = containerRef.current!.clientWidth;
            const height = containerRef.current!.clientHeight;
            const needResize =
                canvas.width !== width || canvas.height !== height;
            if (needResize) {
                renderer.setSize(width, height, false);
                camera.aspect = width / height;
                camera.updateProjectionMatrix();
            }
            return needResize;
        }

        // Clean up
        const handleResize = () => {
            if (resizeRendererToDisplaySize(renderer)) {
                const canvas = renderer.domElement;
                camera.aspect = canvas.clientWidth / canvas.clientHeight;
                camera.updateProjectionMatrix();
            }
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
            scene.remove(cube);
            geometry.dispose();
            material.dispose();
            renderer.dispose();
        };
    }, [selectedDoor]);

    return (
        <div
            ref={containerRef}
            style={{
                width: "100%",
                height: "100%",
                position: "relative",
                // minHeight: "500px",
            }}
        >
            <canvas
                ref={canvasRef}
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    // width: "100%",
                    // height: "100%",
                }}
            />
        </div>
    );
}
