import * as THREE from "three";
import { useEffect, useRef, useMemo } from "react";

// prettier-ignore
export default function CustomObject()
{
    const geometryRef = useRef()

    const trianglesCount = 10
    const verticesCount  = trianglesCount * 3

    const positions = useMemo( () => {
        const positions      = new Float32Array(verticesCount * 3)

        for (let i = 0; i < verticesCount * 3; i++)
        {
            positions[i] = ( Math.random() - 0.5 ) * 3
        }

        return positions;
    }, [])

    useEffect( () => {
        // console.log(geometryRef.current);
        geometryRef.current.computeVertexNormals()
    }, [] ) // provide an empty array so that the func will be called only once after the first render

    return <>
        <mesh>
            <bufferGeometry
                ref={ geometryRef }
            >
                <bufferAttribute 
                    attach   = 'attributes-position'
                    count    = { verticesCount }
                    itemSize = { 3 }
                    array    = { positions }
                />
            </bufferGeometry>
            <meshStandardMaterial 
                color = 'red'
                side  = { THREE.DoubleSide }
            />
        </mesh>
    </> 
}
