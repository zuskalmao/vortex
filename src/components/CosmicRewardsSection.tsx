import { useState } from 'react';
import { motion } from 'framer-motion';

interface RewardTier {
  name: string;
  minHolding: string;
  benefits: string[];
  color: string;
  borderColor: string;
}

const rewardTiers: RewardTier[] = [
  {
    name: "Cosmic Explorer",
    minHolding: "10,000",
    benefits: [
      "Exclusive community access",
      "Vortex Portal basic features",
      "Weekly airdrops participation",
      "Community voting rights"
    ],
    color: "from-blue-600/30 to-blue-800/30",
    borderColor: "border-blue-500/30"
  },
  {
    name: "Galactic Pioneer",
    minHolding: "100,000",
    benefits: [
      "All Explorer benefits",
      "NFT whitelist opportunities",
      "Private community channels",
      "Increased airdrop allocation", 
      "Beta feature testing"
    ],
    color: "from-purple-600/30 to-purple-800/30",
    borderColor: "border-purple-500/30"
  },
  {
    name: "Celestial Guardian",
    minHolding: "1,000,000",
    benefits: [
      "All Pioneer benefits",
      "Early access to new features",
      "Priority staking pools",
      "Enhanced voting power (2x)",
      "Exclusive merchandise",
      "Direct team communication"
    ],
    color: "from-pink-600/30 to-purple-600/30",
    borderColor: "border-pink-500/30"
  }
];

interface BenefitCardProps {
  icon: string;
  title: string;
  description: string;
  delay: number;
}

function BenefitCard({ icon, title, description, delay }: BenefitCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="flex flex-col items-center text-center p-6"
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-purple-200">{description}</p>
    </motion.div>
  );
}

export default function CosmicRewardsSection() {
  const [activeTier, setActiveTier] = useState<number>(1);
  
  return (
    <section id="rewards" className="py-20 bg-black/60 backdrop-blur-lg relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/10 to-black/20 z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Cosmic Rewards</h2>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            Unlock stellar benefits as you join the $VORTEX universe, with rewards that scale with your commitment
          </p>
        </motion.div>
        
        {/* Core Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <BenefitCard
            icon="✨"
            title="Community First"
            description="Join a vibrant community of cosmic explorers, with exclusive events and opportunities"
            delay={0.1}
          />
          <BenefitCard
            icon="🚀"
            title="Growing Rewards"
            description="Increased benefits based on your holding tier, from basic features to premium access"
            delay={0.2}
          />
          <BenefitCard
            icon="⚡"
            title="Utility Access"
            description="Gain access to the Vortex Portal with its cross-chain technologies and advanced features"
            delay={0.3}
          />
        </div>
        
        {/* Tier Selection */}
        <div className="flex justify-center mb-10">
          <div className="bg-black/30 backdrop-blur-md rounded-full p-1.5 inline-flex">
            {rewardTiers.map((tier, index) => (
              <motion.button
                key={tier.name}
                onClick={() => setActiveTier(index)}
                className={`px-6 py-2 rounded-full text-white font-medium ${activeTier === index ? 'bg-gradient-to-r from-purple-600 to-blue-500 shadow-lg' : 'hover:bg-white/5'} transition-all`}
                whileHover={{ scale: activeTier !== index ? 1.05 : 1 }}
                whileTap={{ scale: 0.95 }}
              >
                {tier.name}
              </motion.button>
            ))}
          </div>
        </div>
        
        {/* Tier Details */}
        <motion.div
          key={activeTier}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className={`bg-gradient-to-br ${rewardTiers[activeTier].color} backdrop-blur-md rounded-2xl p-8 border ${rewardTiers[activeTier].borderColor}`}>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">{rewardTiers[activeTier].name}</h3>
                <p className="text-purple-200">Tier benefits and privileges</p>
              </div>
              <div className="mt-4 md:mt-0 px-4 py-2 bg-black/20 backdrop-blur-sm rounded-full">
                <span className="text-sm text-purple-200">Min. Hold: </span>
                <span className="text-white font-medium">{rewardTiers[activeTier].minHolding} $VORTEX</span>
              </div>
            </div>
            
            <ul className="space-y-4">
              {rewardTiers[activeTier].benefits.map((benefit, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-center"
                >
                  <div className="w-6 h-6 flex-shrink-0 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 text-white">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span className="text-white">{benefit}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
        
        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-purple-200 mb-6 max-w-2xl mx-auto">
            Start your cosmic journey today and climb through the reward tiers as your $VORTEX holdings increase. Each tier unlocks new possibilities in the Vortex ecosystem.
          </p>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-full bg-gradient-to-r from-purple-600 to-blue-500 px-8 py-4 font-bold text-white shadow-lg hover:shadow-purple-500/50 transition-all"
          >
            Buy $VORTEX to Start
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
