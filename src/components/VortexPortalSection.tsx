import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { MathUtils } from 'three';
import * as THREE from 'three';

function Portal() {
  const portalRef = useRef<THREE.Mesh>(null);
  const innerRef = useRef<THREE.Mesh>(null);
  const particlesRef = useRef<THREE.Points>(null);
  const particleCount = 1000;

  useFrame((state) => {
    if (portalRef.current) {
      portalRef.current.rotation.z += 0.005;
    }

    if (innerRef.current) {
      innerRef.current.rotation.z -= 0.01;
      innerRef.current.scale.x = MathUtils.lerp(innerRef.current.scale.x, 1 + Math.sin(state.clock.elapsedTime) * 0.05, 0.1);
      innerRef.current.scale.y = MathUtils.lerp(innerRef.current.scale.y, 1 + Math.sin(state.clock.elapsedTime) * 0.05, 0.1);
    }

    if (particlesRef.current) {
      const positions = particlesRef.current.geometry.attributes.position;
      const time = state.clock.getElapsedTime();

      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        const x = positions.getX(i);
        const y = positions.getY(i);
        const z = positions.getZ(i);

        // Create spiral motion towards center
        const angle = Math.atan2(y, x) + time * 0.2;
        const radius = Math.sqrt(x * x + y * y);
        const newRadius = radius > 0.1 ? radius - 0.001 : 3;
        
        positions.setXYZ(
          i,
          newRadius * Math.cos(angle),
          newRadius * Math.sin(angle),
          z
        );
      }

      positions.needsUpdate = true;
    }
  });

  return (
    <group>
      {/* Outer ring */}
      <mesh ref={portalRef}>
        <torusGeometry args={[2, 0.2, 16, 100]} />
        <meshStandardMaterial color="#5e17eb" emissive="#410099" wireframe />
      </mesh>
      
      {/* Inner ring */}
      <mesh ref={innerRef}>
        <torusGeometry args={[1.4, 0.3, 16, 64]} />
        <meshStandardMaterial 
          color="#3b82f6" 
          emissive="#4338ca" 
          emissiveIntensity={1.5}
          wireframe 
        />
      </mesh>
      
      {/* Portal center */}
      <mesh>
        <circleGeometry args={[1.2, 64]} />
        <meshBasicMaterial 
          color="#000000"
          transparent
          opacity={0.8}
        />
      </mesh>
      
      {/* Glow disc */}
      <mesh>
        <circleGeometry args={[1.2, 64]} />
        <meshBasicMaterial 
          color="#5e17eb" 
          transparent 
          opacity={0.2}
        />
      </mesh>
      
      {/* Particle system */}
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particleCount}
            array={(() => {
              const arr = new Float32Array(particleCount * 3);
              for (let i = 0; i < particleCount; i++) {
                const theta = Math.random() * Math.PI * 2;
                const radius = 0.5 + Math.random() * 2.5;
                arr[i * 3] = radius * Math.cos(theta);
                arr[i * 3 + 1] = radius * Math.sin(theta);
                arr[i * 3 + 2] = (Math.random() - 0.5) * 0.5;
              }
              return arr;
            })()}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial 
          size={0.02} 
          color="#a78bfa" 
          transparent 
          opacity={0.8}
          sizeAttenuation 
        />
      </points>
    </group>
  );
}

function PortalScene() {
  return (
    <>
      <ambientLight intensity={0.2} />
      <pointLight position={[0, 0, 3]} intensity={1} color="#5e17eb" />
      <Portal />
    </>
  );
}

interface FeatureCardProps {
  title: string;
  description: string;
  icon: JSX.Element;
  delay: number;
}

function FeatureCard({ title, description, icon, delay }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true }}
      className="bg-black/40 backdrop-blur-md rounded-2xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all group"
    >
      <div className="w-14 h-14 flex items-center justify-center mb-4 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg shadow-lg shadow-purple-500/20 group-hover:shadow-purple-500/30 transition-all">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-purple-200">{description}</p>
    </motion.div>
  );
}

export default function VortexPortalSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  
  return (
    <section id="portal" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Vortex Portal</h2>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            Your gateway to the next dimension of DeFi experiences, powered by the cosmic force of Solana
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Portal Visualization */}
          <div ref={ref} className="h-[400px] lg:h-[500px] relative">
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 1 }}
              className="w-full h-full"
            >
              <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
                <PortalScene />
              </Canvas>
              
              {/* Glow effect */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-purple-600/30 rounded-full filter blur-3xl"></div>
              </div>
            </motion.div>
          </div>
          
          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <FeatureCard
              title="Cross-Chain Bridging"
              description="Access multiple blockchains through our vortex gateway technology"
              icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 text-white"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>}
              delay={0.1}
            />
            
            <FeatureCard
              title="Wormhole Technology"
              description="Instant token swaps with minimal fees through our advanced routing"
              icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 text-white"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle><line x1="4.93" y1="4.93" x2="9.17" y2="9.17"></line><line x1="14.83" y1="14.83" x2="19.07" y2="19.07"></line><line x1="14.83" y1="9.17" x2="19.07" y2="4.93"></line><line x1="4.93" y1="19.07" x2="9.17" y2="14.83"></line></svg>}
              delay={0.2}
            />
            
            <FeatureCard
              title="Cosmic Staking"
              description="Earn rewards by contributing to the stability of the vortex"
              icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 text-white"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>}
              delay={0.3}
            />
            
            <FeatureCard
              title="Interstellar DAO"
              description="Community governance for the future direction of the project"
              icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 text-white"><path d="M12 2L2 7l10 5 10-5-10-5z"></path><path d="M2 17l10 5 10-5"></path><path d="M2 12l10 5 10-5"></path></svg>}
              delay={0.4}
            />
          </div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-full bg-gradient-to-r from-purple-600 to-blue-500 px-8 py-4 font-bold text-white shadow-lg hover:shadow-purple-500/50 transition-all"
          >
            Enter the Vortex
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
