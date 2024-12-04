import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-primary/90 backdrop-blur-sm z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-secondary text-2xl font-bold">Charles A.</h1>
        </motion.div>
        
        <nav className="flex items-center gap-6">
          <a href="#about" className="text-textPrimary hover:text-secondary transition-colors">About</a>
          <a href="#projects" className="text-textPrimary hover:text-secondary transition-colors">Projects</a>
          <a href="#contact" className="text-textPrimary hover:text-secondary transition-colors">Contact</a>
          
          <div className="flex gap-4">
            <a href="https://github.com/Gift-World" target="_blank" rel="noopener noreferrer" className="text-textPrimary hover:text-secondary transition-colors">
              <FaGithub size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-textPrimary hover:text-secondary transition-colors">
              <FaLinkedin size={20} />
            </a>
            
          </div>
        </nav>
      </div>
    </header>
  );
}