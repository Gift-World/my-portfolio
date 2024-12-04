import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: "Movie Theatre",
    description: "This application allows users to purchase movie tickets from the theatre.",
    tech: ["Javascript", "Node.js"],
    image: "https://images.unsplash.com/photo-1502033491742-0e11fb057e16?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW92aWUlMjB0aGVhdHJlfGVufDB8fDB8fHww",
    github: "https://github.com/Gift-World/Movie-Theatre",
    link: "#",
    featured: true
  },
  {
    title: "Shopping List",
    description: "An application where a user is able to add items to a shopping list , delete unwanted items, and mark item purchased.This application also enables the user to easily write a shopping list and avoid the work of writing the items on paper and is easy for reference.",
    tech: ["Javascript", "CSS"],
    image: "https://images.unsplash.com/photo-1623265301442-f4a98db77ab4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2hvcHBpbmclMjBsaXN0fGVufDB8fDB8fHww",
    github: "https://github.com/Gift-World/code-challenge-2",
    link: "#",
    featured: true
  },
  {
    title: "Gamers Hub",
    description: "This application allows users to search for games and be able to add them as their favourites",
    tech: ["Javascript","CSS"],
    image: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z2FtaW5nfGVufDB8fDB8fHww",
    github: "https://github.com/Gift-World/Gamers-Hub",
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