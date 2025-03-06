import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="py-10 bg-black/80 backdrop-blur-md border-t border-purple-900/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-6">$VORTEX</h3>
            <p className="text-purple-200 mb-6 max-w-md">
              The cosmic force of Solana. Join our community and become part of the next generation of memecoins.
            </p>
            <div className="flex space-x-4">
              {['Twitter', 'Telegram', 'Discord'].map((platform) => (
                <a 
                  key={platform}
                  href="#" 
                  className="text-white/70 hover:text-white transition-colors"
                >
                  {platform}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'Portal', 'Rewards', 'Community'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="text-purple-200 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Resources</h4>
            <ul className="space-y-2">
              {['Whitepaper', 'FAQ', 'Documentation', 'Privacy'].map((item) => (
                <li key={item}>
                  <a 
                    href="#" 
                    className="text-purple-200 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-10 pt-10 text-center">
          <p className="text-purple-200">
            © {new Date().getFullYear()} $VORTEX. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
