import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Settings, Sun, Moon } from 'lucide-react';
import { useTheme } from 'next-themes';

const themeColors = [
  { name: 'Blue', value: '220 90% 60%', class: 'bg-blue-500' },
  { name: 'Purple', value: '270 80% 60%', class: 'bg-purple-500' },
  { name: 'Green', value: '142 71% 45%', class: 'bg-green-500' },
  { name: 'Red', value: '348 83% 47%', class: 'bg-red-500' },
  { name: 'Orange', value: '24 95% 53%', class: 'bg-orange-500' },
  { name: 'Pink', value: '330 80% 60%', class: 'bg-pink-500' },
];

const ThemeCustomizer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [activeColor, setActiveColor] = useState(themeColors[0].value);

  useEffect(() => {
    setMounted(true);
    const savedColor = localStorage.getItem('theme-color');
    if (savedColor) {
      setActiveColor(savedColor);
      document.documentElement.style.setProperty('--primary', savedColor);
    }
  }, []);

  const handleColorChange = (colorValue: string) => {
    setActiveColor(colorValue);
    document.documentElement.style.setProperty('--primary', colorValue);
    localStorage.setItem('theme-color', colorValue);
  };

  if (!mounted) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="mb-4 p-4 glass-card rounded-2xl w-64 shadow-2xl origin-bottom-right"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-sm text-foreground">Theme Settings</h3>
            </div>

            {/* Dark/Light Mode */}
            <div className="mb-6 bg-muted/50 p-1 rounded-lg flex relative">
              <button
                onClick={() => setTheme('light')}
                className={`flex-1 flex items-center justify-center py-1.5 rounded-md text-sm transition-all z-10 ${
                  theme === 'light' ? 'text-primary-foreground' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                <Sun size={16} className="mr-2" />
                Light
              </button>
              <button
                onClick={() => setTheme('dark')}
                className={`flex-1 flex items-center justify-center py-1.5 rounded-md text-sm transition-all z-10 ${
                  theme === 'dark' ? 'text-primary-foreground' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                <Moon size={16} className="mr-2" />
                Dark
              </button>
              {/* Active Toggle Background */}
              <div 
                className={`absolute top-1 bottom-1 w-[calc(50%-4px)] bg-primary rounded-md transition-all duration-300 ${
                  theme === 'dark' ? 'left-[calc(50%+2px)]' : 'left-1'
                }`}
              />
            </div>

            {/* Color Palette */}
            <div>
              <p className="text-xs font-medium text-muted-foreground mb-3">Accent Color</p>
              <div className="grid grid-cols-3 gap-2">
                {themeColors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => handleColorChange(color.value)}
                    className={`h-8 rounded-full flex items-center justify-center transition-transform hover:scale-110 ${color.class}`}
                    title={color.name}
                  >
                    {activeColor === color.value && (
                      <div className="w-2 h-2 rounded-full bg-white shadow-sm" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="h-12 w-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg hover:shadow-primary/50 transition-shadow"
      >
        <motion.div
           animate={{ rotate: isOpen ? 90 : 0 }}
           transition={{ duration: 0.2 }}
        >
          <Settings size={24} />
        </motion.div>
      </motion.button>
    </div>
  );
};

export default ThemeCustomizer;
