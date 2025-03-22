
import { motion, AnimatePresence } from 'framer-motion';
import { useBeautifyMode } from '@/hooks/useBeautifyMode';

const AnimatedTransition = () => {
  const { isBeautified, isTransitioning } = useBeautifyMode();

  return (
    <AnimatePresence>
      {isTransitioning && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 pointer-events-none"
        >
          <motion.div
            initial={{ 
              height: 0, 
              top: isBeautified ? "100%" : 0,
              bottom: isBeautified ? "auto" : 0 
            }}
            animate={{ 
              height: "100%" 
            }}
            exit={{ 
              height: 0,
              top: isBeautified ? "auto" : 0,
              bottom: isBeautified ? 0 : "auto"
            }}
            transition={{ 
              duration: 0.8, 
              ease: [0.16, 1, 0.3, 1]
            }}
            className="absolute inset-x-0 bg-primary/10 backdrop-blur-lg"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AnimatedTransition;
