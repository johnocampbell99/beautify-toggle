
import { motion } from 'framer-motion';

const MinimalView = () => {
  return (
    <div className="minimal-container min-h-[60vh] flex flex-col items-center justify-center relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-xl"
      >
        <motion.p 
          className="minimal-label mb-6"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          UX/UI Designer
        </motion.p>
        
        <motion.h1 
          className="minimal-title mb-8"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Simplicity is the ultimate sophistication.
        </motion.h1>
        
        <motion.p 
          className="text-muted-foreground"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Creating digital experiences where form follows function.
        </motion.p>
      </motion.div>
    </div>
  );
};

export default MinimalView;
