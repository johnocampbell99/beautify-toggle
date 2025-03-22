
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const BeautifiedView = () => {
  const staggerItems = [
    { delay: 1, content: <span className="inline-block mr-2"><Sparkles className="h-5 w-5 text-primary inline-block" /></span> },
    { delay: 2, content: "UX/UI Designer" },
    { delay: 5, content: <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium mt-4 mb-8 leading-tight">Designing <span className="text-primary">experiences</span> that inspire</h1> },
    { delay: 7, content: <p className="beautified-subtitle max-w-md mb-12">I create digital experiences that blend beauty with function, making every interaction meaningful and memorable.</p> },
    { delay: 9, content: 
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
        <Card title="User Interface" description="Creating visual languages that communicate clearly and beautifully." />
        <Card title="User Experience" description="Designing flows that feel intuitive and effortless." />
        <Card title="Interaction" description="Crafting micro-interactions that delight and guide." />
      </div>
    },
  ];

  return (
    <div className="beautified-container min-h-[70vh] flex flex-col items-center justify-center">
      <div className="w-full max-w-4xl">
        {staggerItems.map((item, index) => (
          <motion.div
            key={index}
            className="stagger-item"
            style={{ '--delay': item.delay } as React.CSSProperties}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              delay: item.delay * 0.1,
              duration: 0.7,
              ease: [0.16, 1, 0.3, 1]
            }}
          >
            {item.content}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const Card = ({ title, description }: { title: string; description: string }) => {
  return (
    <motion.div 
      className="glass-panel rounded-xl p-6"
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <h3 className="text-lg font-medium mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </motion.div>
  );
};

export default BeautifiedView;
