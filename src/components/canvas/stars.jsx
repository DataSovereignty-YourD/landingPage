import { useState, useRef, Suspense, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import isWebGLSupported from "../../effect/isWebGLSupported";

const Stars = (props) => {
    const ref = useRef();
    const [sphere] = useState(() =>
        random.inSphere(new Float32Array(5000), { radius: 1.2 })
    );

    useFrame((state, delta) => {
        ref.current.rotation.x -= delta / 10;
        ref.current.rotation.y -= delta / 15;
    });

    return (
        <group rotation={[0, 0, Math.PI / 6]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
                <PointMaterial
                    transparent={true}
                    color="gray"
                    size={0.01}
                    sizeAttenuation={true}
                    depthWrite={true}

                />
            </Points>
        </group>
    );
};

const StarsCanvas = () => {
    const [webglSupported, setWebglSupported] = useState(false);

    useEffect(() => {
        setWebglSupported(isWebGLSupported());
    }, []);

    return (
        <div className="w-full h-auto fixed inset-0 bg-white">
            {webglSupported && <Canvas camera={{ position: [0, 0, 2] }}>
                <Suspense fallback={null}>
                    <Stars />
                </Suspense>

                <Preload all />
            </Canvas>}
        </div>
    );
};

export default StarsCanvas;
