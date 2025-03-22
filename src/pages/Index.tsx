
import { AnimatePresence } from 'framer-motion';
import { BeautifyProvider, useBeautifyMode } from '@/hooks/useBeautifyMode';
import ToggleSwitch from '@/components/ToggleSwitch';
import MinimalView from '@/components/MinimalView';
import BeautifiedView from '@/components/BeautifiedView';
import AnimatedTransition from '@/components/AnimatedTransition';

const IndexContent = () => {
  const { isBeautified } = useBeautifyMode();

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 right-0 p-6 z-40">
        <ToggleSwitch />
      </header>
      
      <main>
        <AnimatedTransition />
        
        <AnimatePresence mode="wait">
          {!isBeautified ? (
            <MinimalView key="minimal" />
          ) : (
            <BeautifiedView key="beautified" />
          )}
        </AnimatePresence>
      </main>
      
      <footer className="text-center p-6 text-xs text-muted-foreground">
        &copy; {new Date().getFullYear()} — UX/UI Designer Portfolio
      </footer>
    </div>
  );
};

const Index = () => {
  return (
    <BeautifyProvider>
      <IndexContent />
    </BeautifyProvider>
  );
};

export default Index;
