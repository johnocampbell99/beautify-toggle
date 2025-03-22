
import { useState, useEffect, createContext, useContext } from 'react';

type BeautifyContextType = {
  isBeautified: boolean;
  toggleBeautify: () => void;
  isTransitioning: boolean;
};

const BeautifyContext = createContext<BeautifyContextType | undefined>(undefined);

export const BeautifyProvider = ({ children }: { children: React.ReactNode }) => {
  const [isBeautified, setIsBeautified] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const toggleBeautify = () => {
    setIsTransitioning(true);
    setIsBeautified(prev => !prev);
    
    // Apply or remove the beautified class to the body
    if (!isBeautified) {
      document.body.classList.add('beautified');
    } else {
      setTimeout(() => {
        document.body.classList.remove('beautified');
      }, 100); // Small delay for smoother transition
    }
    
    // Reset the transitioning state after animations complete
    setTimeout(() => {
      setIsTransitioning(false);
    }, 1000);
  };

  // Initialize without the beautified class
  useEffect(() => {
    document.body.classList.remove('beautified');
  }, []);

  return (
    <BeautifyContext.Provider value={{ isBeautified, toggleBeautify, isTransitioning }}>
      {children}
    </BeautifyContext.Provider>
  );
};

export const useBeautifyMode = () => {
  const context = useContext(BeautifyContext);
  if (context === undefined) {
    throw new Error('useBeautifyMode must be used within a BeautifyProvider');
  }
  return context;
};
