import { motion } from 'framer-motion';

const socialLinks = [
  { name: 'Twitter', url: '#', icon: 'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z' },
  { name: 'Telegram', url: '#', icon: 'M2.505 2.955 21.205 10.483c1.6.725 1.595 1.781 0 2.487l-18.7 7.528c-1.65.832-2.31.396-2.31-1.208v-15.17c0-1.298.54-1.776 2.31-1.165z' },
  { name: 'Discord', url: '#', icon: 'M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z' },
];

export default function CommunitySection() {
  return (
    <section id="community" className="py-20 bg-black/60 backdrop-blur-lg">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Join Our Community</h2>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            Connect with fellow $VORTEX holders and become part of our growing cosmic community
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.url}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              viewport={{ once: true }}
              className="group flex flex-col items-center p-8 bg-black/40 backdrop-blur-md rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all"
            >
              <div className="w-16 h-16 flex items-center justify-center mb-6 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full shadow-lg shadow-purple-500/20 group-hover:shadow-purple-500/40 transition-all">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-8 h-8 text-white"
                >
                  <path d={social.icon} />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{social.name}</h3>
              <p className="text-purple-200 text-center">Join our {social.name.toLowerCase()} community</p>
            </motion.a>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 p-8 bg-black/40 backdrop-blur-md rounded-2xl border border-purple-500/20 max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Sign Up for Updates</h3>
          
          <form className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-black/60 border border-purple-500/30 rounded-full px-6 py-4 text-white focus:outline-none focus:border-purple-500/50"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-purple-600 to-blue-500 rounded-full px-8 py-4 font-bold text-white shadow-lg hover:shadow-purple-500/30 transition-all"
              >
                Subscribe
              </motion.button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
