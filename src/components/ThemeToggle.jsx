import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { motion } from 'framer-motion';

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleTheme}
            className="btn-secondary"
            style={{
                padding: '0.5rem',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
            }}
            aria-label="Toggle theme"
        >
            {theme === 'dark' ? (
                <Sun size={20} className="text-yellow-400" color="currentColor" />
            ) : (
                <Moon size={20} className="text-blue-400" color="currentColor" />
            )}
        </motion.button>
    );
};

export default ThemeToggle;
