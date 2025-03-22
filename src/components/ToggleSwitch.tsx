
import { motion } from 'framer-motion';
import { useBeautifyMode } from '@/hooks/useBeautifyMode';

type ToggleSwitchProps = {
  className?: string;
};

const ToggleSwitch = ({ className = '' }: ToggleSwitchProps) => {
  const { isBeautified, toggleBeautify, isTransitioning } = useBeautifyMode();

  return (
    <div className={`flex flex-col items-center ${className}`}>
      <motion.p 
        className="text-xs mb-2 text-center text-muted-foreground"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {isBeautified ? "Simplify" : "Flip the switch to beautify your site"}
      </motion.p>
      
      <button
        type="button"
        onClick={toggleBeautify}
        disabled={isTransitioning}
        className={`toggle-switch ${isBeautified ? 'toggle-switch-beautified' : 'toggle-switch-minimal'}`}
        aria-pressed={isBeautified}
      >
        <span 
          className={`toggle-switch-handle ${isBeautified ? 'toggle-switch-handle-active' : ''}`}
          aria-hidden="true"
        />
      </button>
    </div>
  );
};

export default ToggleSwitch;
