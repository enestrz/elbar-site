"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

export default function Model() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (!canvasRef.current || !containerRef.current) return;

        // Scene
        const scene = new THREE.Scene();

        // Camera
        const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
        camera.position.z = 3;

        const light = new THREE.AmbientLight(0xffffff, 3); // soft white light
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
        });
        renderer.outputColorSpace = THREE.SRGBColorSpace;
        renderer.setClearColor(0x000000, 0);
        renderer.toneMapping = THREE.ReinhardToneMapping;
        renderer.setPixelRatio(window.devicePixelRatio);
        resizeRendererToDisplaySize(renderer);
        containerRef.current.appendChild(renderer.domElement);

        const box = new THREE.BoxGeometry(1.5, 4, 0.05);

        const material = new THREE.MeshLambertMaterial({
            map: new THREE.TextureLoader().load(
                "/kapilar/primerli/cift-renk/LMD 206-206-206 İTALYAN CEVİZ.png",
                (t) => {
                    t.colorSpace = THREE.SRGBColorSpace;
                    t.wrapS = t.wrapT = THREE.RepeatWrapping;
                }
            ),
        });

        material.toneMapped = false;
        material.map!.onUpdate = () => {
            material.needsUpdate = true;
            return material;
        };

        const cube = new THREE.Mesh(box, material);
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
            const objectToRemove = scene.children.find(
                (child) => child instanceof THREE.Object3D
            ) as THREE.Object3D;
            if (objectToRemove) {
                scene.remove(objectToRemove);
            }
            renderer.dispose();
        };
    }, []);

    return (
        <div
            ref={containerRef}
            style={{
                width: "100%",
                height: "100%",
                position: "relative",
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
