import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-secondary mb-4"
          >
            Hi, my name is
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-5xl md:text-7xl font-bold text-textPrimary mb-4"
          >
            Charles Ang'ila
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-4xl md:text-6xl font-bold text-textSecondary mb-8"
          >
            <TypeAnimation
              sequence={[
                'I am a full stack developer ',
                2000,
                'I develop well interactive web applications',
                2000,
                'I develop unique websites tailored to customers needs',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </motion.div>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="text-textSecondary text-lg mb-12 max-w-2xl"
          >
           I am a passionate software developer with expertise in creating innovative,  digital web applications. I specialize in developing  high-performance websites that aim at fulfilling the client's needs. With a strong focus on crafting intuitive interfaces and seamless interactions, I strive to deliver solutions that empower users and meet diverse needs in today's fast-evolving digital landscape.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="space-x-4"
          >
            <a
              href="https://github.com/Gift-World"
              className="inline-block px-8 py-4 border-2 border-secondary text-secondary hover:bg-secondary/10 transition-colors rounded"
            >
              Check out my work!
            </a>
            <a
              href="#contact"
              className="inline-block px-8 py-4 bg-secondary/10 text-secondary hover:bg-secondary/20 transition-colors rounded"
            >
              Get in touch
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}