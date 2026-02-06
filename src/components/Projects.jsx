import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';
import medilink from '../assets/medilink.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: 'MediLink AI',
            description: 'A medical consultation orchestration platform with a React/Vite frontend and .NET 10 backend. It leverages the Microsoft Agent Framework (unifying Semantic Kernel and AutoGen) to facilitate a safe, peer-reviewed diagnostic process between specialized AI agents.',
            tags: ['React', 'Vite', '.NET 10', 'AI Agents', 'Semantic Kernel'],
            image: medilink,
            link: 'https://medilink-ui.netlify.app/',
            github: 'https://github.com/Casido1/MediLink.AI.Service'
        },
        {
            id: 2,
            title: 'Neon Bank Mobile',
            description: 'A next-generation mobile banking application focused on user experience and financial health visualization.',
            tags: ['React Native', 'Firebase', 'Redux'],
            image: project2,
            link: '#',
            github: '#'
        },
        {
            id: 3,
            title: 'Aura Fashion',
            description: 'An elegant e-commerce platform for a luxury fashion brand with seamless checkout and inventory management.',
            tags: ['Next.js', 'Stripe', 'Tailwind', 'PostgreSQL'],
            image: project3,
            link: '#',
            github: '#'
        }
    ];

    return (
        <section id="projects" style={{ padding: '8rem 0', background: 'var(--bg-primary)' }}>
            <div className="container">
                <motion.h2
                    className="gradient-text"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    Selected Works
                </motion.h2>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                    gap: '2.5rem',
                    marginTop: '4rem'
                }}>
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            className="glass-panel"
                            style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                        >
                            <div style={{ position: 'relative', height: '240px', overflow: 'hidden' }}>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        transition: 'transform 0.5s ease'
                                    }}
                                    onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
                                    onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                                />
                                <div style={{
                                    position: 'absolute',
                                    inset: 0,
                                    background: 'linear-gradient(to top, rgba(15,23,42,0.9), transparent)',
                                    opacity: 0,
                                    transition: 'opacity 0.3s ease'
                                }}
                                    className="hover-overlay"
                                />
                            </div>

                            <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                <div style={{ marginBottom: 'auto' }}>
                                    <h3 style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>{project.title}</h3>
                                    <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '1rem' }}>
                                        {project.description}
                                    </p>
                                </div>

                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                                    {project.tags.map(tag => (
                                        <span
                                            key={tag}
                                            style={{
                                                fontSize: '0.75rem',
                                                padding: '0.25rem 0.75rem',
                                                borderRadius: '20px',
                                                background: 'rgba(99, 102, 241, 0.1)',
                                                color: 'var(--accent-primary)',
                                                border: '1px solid rgba(99, 102, 241, 0.2)'
                                            }}
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                                    <a href={project.link} className="btn" style={{ padding: '0.5rem 0', color: 'var(--text-primary)', fontSize: '0.9rem' }}>
                                        Live Demo <ExternalLink size={16} style={{ marginLeft: '4px' }} />
                                    </a>
                                    <a href={project.github} className="btn" style={{ padding: '0.5rem 0', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                                        Source Code <Github size={16} style={{ marginLeft: '4px' }} />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
