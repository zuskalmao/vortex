import { useState, useEffect } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'

// Components
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import VortexPortalSection from './components/VortexPortalSection'
import CosmicRewardsSection from './components/CosmicRewardsSection'
import CommunitySection from './components/CommunitySection'
import Footer from './components/Footer'

function App() {
  const [loaded, setLoaded] = useState(false)
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })

  useEffect(() => {
    setLoaded(true)
  }, [])

  return (
    <div className="relative flex min-h-screen flex-col bg-gradient-to-br from-purple-900 via-blue-900 to-black text-white overflow-hidden">
      {/* Background elements */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full filter blur-3xl"></div>
      </div>
      
      {/* Progress bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 via-blue-500 to-purple-600 z-50"
        style={{ scaleX, transformOrigin: '0%' }}
      />

      {/* Main content */}
      <div className="relative z-10">
        <Header />
        
        <main>
          <HeroSection />
          <VortexPortalSection />
          <CosmicRewardsSection />
          <CommunitySection />
        </main>
        
        <Footer />
      </div>
      
      {/* Initial page transition */}
      {!loaded && (
        <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="text-3xl font-bold text-white"
          >
            $VORTEX
          </motion.div>
        </div>
      )}
    </div>
  )
}

export default App
