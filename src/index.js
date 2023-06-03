import "./style.css";
import ReactDOM from "react-dom/client";
// import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import Episode from "./Episode.js";
import * as THREE from "three";
import React from 'react'
import Plot from 'react-plotly.js'

const root = ReactDOM.createRoot(document.querySelector("#root"));

// r3f -------------------------------------------------------------------------
// camera settings
const cameraSettings = {
    fov: 45,
    // zoom    : 100,
    near: 0.1,
    far: 1000,
    position: [3, 2, 6],
};

// WebGLRenderer settings
const glSettings = {
    antialias: true,
    // toneMapping : THREE.CineonToneMapping,
    toneMapping: THREE.ACESFilmicToneMapping,
    // outputEncoding : THREE.LinearEncoding,
    outputEncoding: THREE.sRGBEncoding,
};

// prettier-ignore
// root.render(
//     <Canvas
//         dpr={[1, 2]}          // pixel ratio range (default value)
//         gl={glSettings}
//         camera={cameraSettings}
//     >
//         <Episode />
//     </Canvas>
// );

root.render(
    <Plot
        data={[
            {
                x: [1, 2, 3],
                y: [2, 6, 3],
                type: 'scatter',
                mode: 'lines+markers',
                marker: { color: 'red' },
            },
            { type: 'bar', x: [1, 2, 3], y: [2, 5, 3] },
        ]}

        layout={{
            width: 800,
            height: 600,
            title: 'A Fancy Plot',
            paper_bgcolor: 'rgba(0,0,0,0)',
            plot_bgcolor: 'rgba(0,0,0,0)',
        }}
    />
)

