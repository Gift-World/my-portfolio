import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: "Movie Theatre",
    description: "This application allows users to purchase movie tickets from the theatre.",
    tech: ["Javascript", "Node.js"],
    image: "data:image/jpeg;base64,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",
    github: "https://github.com/Gift-World/Movie-Theatre",
    link: "#",
    featured: true
  },
  {
    title: "Shopping List",
    description: "An application where a user is able to add items to a shopping list , delete unwanted items, and mark item purchased.This application also enables the user to easily write a shopping list and avoid the work of writing the items on paper and is easy for reference.",
    tech: ["React", "D3.js", "Firebase", "Tailwind"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
    github: "https://github.com",
    link: "#",
    featured: true
  },
  {
    title: "AI Chat Application",
    description: "Real-time chat application powered by AI for automated customer support and engagement.",
    tech: ["React", "Socket.io", "OpenAI", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?w=500&h=300&fit=crop",
    github: "https://github.com",
    link: "#",
    featured: true
  }
];

export default function Projects() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="projects" ref={ref} className="py-20">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-textPrimary mb-12"
        >
          Featured Projects
        </motion.h2>
        
        <div className="space-y-32">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`relative flex flex-col ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } items-center gap-8`}
            >
              <div className="w-full md:w-7/12 relative group">
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-primary/80 transition-opacity duration-300 opacity-50 group-hover:opacity-0"></div>
                </div>
              </div>
              
              <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pl-8' : 'md:pr-8'}`}>
                <h3 className="text-2xl font-bold text-textPrimary mb-4">{project.title}</h3>
                <div className="bg-primary/50 p-6 rounded-lg backdrop-blur-sm mb-4">
                  <p className="text-textSecondary">{project.description}</p>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-secondary text-sm px-2 py-1 bg-secondary/10 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-textPrimary hover:text-secondary transition-colors"
                  >
                    <FaGithub size={24} />
                  </a>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-textPrimary hover:text-secondary transition-colors"
                  >
                    <FaExternalLinkAlt size={24} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}