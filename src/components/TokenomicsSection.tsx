import { motion } from 'framer-motion';

interface TokenAllocation {
  name: string;
  percentage: number;
  color: string;
}

const tokenAllocations: TokenAllocation[] = [
  { name: 'Community', percentage: 50, color: 'bg-purple-500' },
  { name: 'Liquidity', percentage: 30, color: 'bg-blue-500' },
  { name: 'Team', percentage: 10, color: 'bg-indigo-500' },
  { name: 'Marketing', percentage: 10, color: 'bg-pink-500' },
];

export default function TokenomicsSection() {
  return (
    <section id="tokenomics" className="py-20 bg-black/60 backdrop-blur-lg relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-black/20 z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Tokenomics</h2>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            $VORTEX is designed with a balanced tokenomics model to ensure long-term growth and community value.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="bg-black/40 backdrop-blur-md rounded-2xl p-8 border border-purple-500/20">
              <h3 className="text-2xl font-bold text-white mb-6">Token Details</h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-purple-200">Token Name</span>
                  <span className="text-white font-medium">VORTEX</span>
                </div>
                <div className="border-t border-white/10"></div>
                
                <div className="flex justify-between items-center">
                  <span className="text-purple-200">Ticker</span>
                  <span className="text-white font-medium">$VORTEX</span>
                </div>
                <div className="border-t border-white/10"></div>
                
                <div className="flex justify-between items-center">
                  <span className="text-purple-200">Total Supply</span>
                  <span className="text-white font-medium">1,000,000,000</span>
                </div>
                <div className="border-t border-white/10"></div>
                
                <div className="flex justify-between items-center">
                  <span className="text-purple-200">Network</span>
                  <span className="text-white font-medium">Solana</span>
                </div>
                <div className="border-t border-white/10"></div>
                
                <div className="flex justify-between items-center">
                  <span className="text-purple-200">Taxes</span>
                  <span className="text-white font-medium">None</span>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Token Allocation</h3>
            
            {tokenAllocations.map((allocation) => (
              <div key={allocation.name} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-white">{allocation.name}</span>
                  <span className="text-white">{allocation.percentage}%</span>
                </div>
                <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${allocation.percentage}%` }}
                    transition={{ duration: 1, delay: 0.6 }}
                    viewport={{ once: true }}
                    className={`h-full ${allocation.color}`}
                  ></motion.div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
