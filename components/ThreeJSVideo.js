import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeJSVideo = ({ videoSrc }) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current });
        renderer.setSize(window.innerWidth, window.innerHeight);

        const video = document.createElement('video');
        video.src = videoSrc;
        video.loop = true;
        video.muted = true;
        video.play();

        const videoTexture = new THREE.VideoTexture(video);
        videoTexture.minFilter = THREE.LinearFilter;
        videoTexture.magFilter = THREE.LinearFilter;
        videoTexture.format = THREE.RGBFormat;

        const geometry = new THREE.PlaneGeometry(4, 2.25);
        const material = new THREE.MeshBasicMaterial({ map: videoTexture });
        const mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);

        camera.position.z = 5;

        const animate = () => {
            requestAnimationFrame(animate);
            renderer.render(scene, camera);
        };

        animate();

        return () => {
            renderer.dispose();
        };
    }, [videoSrc]);

    return <canvas ref={canvasRef}></canvas>;
};

export default ThreeJSVideo;
