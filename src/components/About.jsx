import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Tilt from 'react-parallax-tilt';

export default function About() {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <section id="about" className="py-20 min-h-screen flex items-center">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="text-3xl font-bold text-textPrimary mb-6">About Me</h2>
            <div className="space-y-4 text-textSecondary">
              <p>
                Hello! I'm Charles, a passionate software developer based in Nairobi, Kenya. 
                I enjoy creating things that live on the internet, whether that be websites, 
                applications, or anything in between.
              </p>
              <p>
                My journey in web development started years back in highschool when I started to have interest in the tech world. 
              </p>
              <p>
                Here are a few technologies I've been working with recently:
              </p>
              <ul className="grid grid-cols-2 gap-2 mt-4">
                {['JavaScript ', 'React', 'Node.js',  'Tailwind CSS', 'Python','Flask','PostgreSql','SQlite'].map((tech, index) => (
                  <motion.li
                    key={tech}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center space-x-2"
                  >
                    <span className="text-secondary">▹</span>
                    <span>{tech}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="flex justify-center">
            <Tilt>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="w-64 h-64 rounded-lg overflow-hidden">
                  <img
                    src="src/assets/giftimage.jpg"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 border-2 border-secondary rounded-lg transform translate-x-4 translate-y-4 -z-10"></div>
              </motion.div>
            </Tilt>
          </div>
        </motion.div>
      </div>
    </section>
  );
}