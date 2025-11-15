// src/components/ThreeDOverlay.jsx
import React, { useRef, useEffect } from "react";
import * as THREE from "three";

export default function ThreeDOverlay() {
    const mountRef = useRef(null);

    useEffect(() => {
        const currentMount = mountRef.current;

        // Scene
        const scene = new THREE.Scene();

        // Camera
        const camera = new THREE.PerspectiveCamera(
            75,
            currentMount.clientWidth / currentMount.clientHeight,
            0.1,
            1000
        );
        camera.position.z = 5;

        // Renderer
        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
        currentMount.appendChild(renderer.domElement);

        // Torus (lingkaran 3D)
        const torusGeometry = new THREE.TorusGeometry(1.5, 0.05, 16, 100);
        const torusMaterial = new THREE.MeshBasicMaterial({
            color: 0x4465ed,
            transparent: true,
            opacity: 0.4,
        });
        const torus = new THREE.Mesh(torusGeometry, torusMaterial);
        scene.add(torus);

        // Partikel kabut
        const particlesGeometry = new THREE.BufferGeometry();
        const particlesCount = 200;
        const positions = new Float32Array(particlesCount * 3);
        for (let i = 0; i < particlesCount * 3; i++) {
            positions[i] = (Math.random() - 0.5) * 6;
        }
        particlesGeometry.setAttribute(
            "position",
            new THREE.BufferAttribute(positions, 3)
        );
        const particlesMaterial = new THREE.PointsMaterial({
            color: 0x4465ed,
            size: 0.05,
            transparent: true,
            opacity: 0.3,
        });
        const particles = new THREE.Points(particlesGeometry, particlesMaterial);
        scene.add(particles);

        // Animate
        const animate = () => {
            requestAnimationFrame(animate);
            torus.rotation.x += 0.002;
            torus.rotation.y += 0.004;

            particles.rotation.y += 0.001;
            particles.rotation.x += 0.001;

            renderer.render(scene, camera);
        };
        animate();

        // Cleanup
        return () => {
            currentMount.removeChild(renderer.domElement);
        };
    }, []);

    return (
        <div
            ref={mountRef}
            style={{ width: "100%", height: "100%", position: "absolute", top: 0, left: 0 }}
        />
    );
}
