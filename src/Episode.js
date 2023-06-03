import { useThree, extend, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import CustomObject from './CustomObject.js'

extend({ OrbitControls: OrbitControls }); // or, just extend({OrbitControls})

// prettier-ignore
export default function Episode() 
{
    // use "destructure" to retrieve the returns of a func 
    const { camera, gl } = useThree()
    const cubeRef  = useRef()
    const groupRef = useRef()

    // specify a func in useFrame which will be called on each frame
    useFrame( (state, deltaTime) => {

        // rotate camera around the center
        // const angle = state.clock.elapsedTime
        // state.camera.position.x = Math.sin(angle)  * 8 
        // state.camera.position.z = Math.cos(angle)  * 8 
        // state.camera.lookAt(0, 0, 0)

        cubeRef.current.rotation.y  += deltaTime * 5
        groupRef.current.rotation.y += deltaTime
    } )

	return <>
        <orbitControls 
            args={ [ camera, gl.domElement ] }
        />

        <directionalLight 
            position = { [ 1, 2, 3 ] }
            intensity = { 1.5 }
        />

        <ambientLight 
            intensity = { 0.5 }
        />

        <group
            ref = { groupRef }  // link group with the groupRef hook via its ref attrib
        >
            {/* add a sphere  */}
            <mesh
                position-x = { -2 }
            >
                <sphereGeometry />
                <meshStandardMaterial color = 'orange'/> 
            </mesh>

            {/* add a box  */}
            <mesh
                // use the ref attirb to associate the box with the mesh
                ref = { cubeRef }   
                scale = { [ 1.5, 1.5, 1.5 ] }    // the same as mesh.sclae.set(1.5)
                // position = { [ 2, 2, 2 ] }  
                position-x = { 2 }
                rotation-y = { Math.PI * 0.25 }
            >
                <boxGeometry 
                    // args = { [ 1.5, 1.5, 1.5 ] }
                    scale = { 1.5 }
                />
                <meshStandardMaterial 
                    // args = { [ { color: 'red', 
                    //              wireframe: true, 
                    //             } ] }
                    color = 'blue'
                    wireframe = { false }
                />
            </mesh>
        </group>

        {/* add a plane */}
        <mesh
            position-y = { -1 }
            rotation-x = { -Math.PI * 0.5 }
            scale      = { 10 }
        >
            <planeGeometry />
            <meshStandardMaterial color = 'green'/>
        </mesh>

        <CustomObject /> 

    </>
}
