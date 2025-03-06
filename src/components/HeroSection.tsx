import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';

function Stars({ count = 500 }) {
  const mesh = useRef<THREE.Points>(null);
  const geometry = useRef<THREE.BufferGeometry>(null);
  
  useEffect(() => {
    if (geometry.current) {
      const positions = new Float32Array(count * 3);
      const scales = new Float32Array(count);
      
      for (let i = 0; i < count; i++) {
        const i3 = i * 3;
        positions[i3] = (Math.random() - 0.5) * 10;
        positions[i3 + 1] = (Math.random() - 0.5) * 10;
        positions[i3 + 2] = (Math.random() - 0.5) * 10;
        scales[i] = Math.random();
      }
      
      geometry.current.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      geometry.current.setAttribute('scale', new THREE.BufferAttribute(scales, 1));
    }
  }, [count]);
  
  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.x = mesh.current.rotation.y += 0.001;
    }
  });
  
  return (
    <points ref={mesh}>
      <bufferGeometry ref={geometry} />
      <pointsMaterial
        size={0.05}
        color="#ffffff"
        sizeAttenuation
        transparent
        depthWrite={false}
      />
    </points>
  );
}

function Vortex() {
  const mesh = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
      mesh.current.rotation.y += 0.01;
    }
  });
  
  return (
    <mesh ref={mesh}>
      <torusGeometry args={[1.5, 0.4, 32, 100]} />
      <meshStandardMaterial
        color="#5e17eb"
        emissive="#410099"
        wireframe
        roughness={0.5}
        metalness={0.8}
      />
    </mesh>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.2} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <Vortex />
      <Stars />
    </>
  );
}

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen pt-20 overflow-hidden flex items-center">
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
          <Scene />
        </Canvas>
      </div>
      
      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-[0_0_15px_rgba(94,23,235,0.5)]"
          >
            $VORTEX
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-xl md:text-2xl text-purple-200 mb-12"
          >
            The Cosmic Force of Solana
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-full bg-gradient-to-r from-purple-600 to-blue-500 px-8 py-4 font-bold text-white shadow-lg hover:shadow-purple-500/50 transition-all"
            >
              Buy $VORTEX
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-full bg-black/30 backdrop-blur-md border border-purple-500/30 px-8 py-4 font-bold text-white shadow-lg hover:shadow-blue-500/30 transition-all"
            >
              Join Community
            </motion.button>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="mt-16 flex justify-center space-x-6"
          >
            {['Twitter', 'Discord', 'Telegram'].map((platform) => (
              <a 
                key={platform}
                href="#" 
                className="text-white/70 hover:text-white transition-colors"
              >
                {platform}
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
