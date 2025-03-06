import { motion } from 'framer-motion';

interface RoadmapItem {
  phase: string;
  title: string;
  description: string;
  items: string[];
  status: 'completed' | 'current' | 'upcoming';
}

const roadmapItems: RoadmapItem[] = [
  {
    phase: 'Phase 1',
    title: 'Launch',
    description: 'Initial token launch and community building',
    items: [
      'Token launch on Solana',
      'Website launch',
      'Social media setup',
      'Initial marketing campaign',
      'Community building'
    ],
    status: 'completed'
  },
  {
    phase: 'Phase 2',
    title: 'Growth',
    description: 'Expanding our ecosystem and utility',
    items: [
      'Exchange listings',
      'Community expansion',
      'Partnerships announcement',
      'Vortex minigame release',
      'Staking platform development'
    ],
    status: 'current'
  },
  {
    phase: 'Phase 3',
    title: 'Expansion',
    description: 'Building additional utilities and exposure',
    items: [
      'Major CEX listings',
      'Launch of Vortex DAO',
      'NFT collection',
      'Expanded utility development',
      'Global marketing campaigns'
    ],
    status: 'upcoming'
  },
  {
    phase: 'Phase 4',
    title: 'Evolution',
    description: 'The next evolution of the Vortex ecosystem',
    items: [
      'Vortex Launchpad',
      'Ecosystem expansion',
      'Cross-chain integration',
      'Advanced DeFi products',
      'Enterprise partnerships'
    ],
    status: 'upcoming'
  }
];

export default function RoadmapSection() {
  return (
    <section id="roadmap" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/10 to-transparent z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Roadmap</h2>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            Our journey to establishing $VORTEX as a cosmic force in the Solana ecosystem
          </p>
        </motion.div>
        
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500 via-blue-500 to-purple-500 hidden md:block"></div>
          
          <div className="space-y-20">
            {roadmapItems.map((item, index) => (
              <motion.div 
                key={item.phase}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8`}
              >
                <div className="md:w-1/2 relative">
                  <div className="hidden md:block absolute top-0 w-6 h-6 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 shadow-lg shadow-purple-500/30 z-20"
                    style={{ [index % 2 === 0 ? 'right' : 'left']: '-3px', marginTop: '24px' }}
                  ></div>
                  
                  <div 
                    className={`${
                      item.status === 'completed' ? 'bg-gradient-to-br from-purple-600/90 to-blue-600/90' : 
                      item.status === 'current' ? 'bg-gradient-to-br from-blue-600/80 to-purple-600/80' : 
                      'bg-black/40'
                    } backdrop-blur-md rounded-2xl p-6 border ${
                      item.status === 'completed' ? 'border-purple-400/30' : 
                      item.status === 'current' ? 'border-blue-400/30' : 
                      'border-white/10'
                    }`}
                  >
                    <div className="flex items-center mb-4">
                      <span className="text-xs font-bold px-3 py-1 rounded-full bg-white/10 text-white mr-3">
                        {item.phase}
                      </span>
                      <span className={`text-xs px-3 py-1 rounded-full ${
                        item.status === 'completed' ? 'bg-green-500/20 text-green-300' : 
                        item.status === 'current' ? 'bg-blue-500/20 text-blue-300' : 
                        'bg-gray-500/20 text-gray-300'
                      }`}>
                        {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-purple-200 mb-4">{item.description}</p>
                    
                    <ul className="space-y-2">
                      {item.items.map((listItem, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-purple-400 mr-2">✦</span>
                          <span className="text-white">{listItem}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="md:w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
