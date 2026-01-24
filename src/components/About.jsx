import React from 'react';
import { Code, Database, Brain, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
    const skills = [
        {
            icon: <Code size={24} />,
            title: "Fullstack Development",
            description: "Expertise in .NET (C#) and Angular for building robust, scalable web applications."
        },
        {
            icon: <Brain size={24} />,
            title: "AI Integration",
            description: "Leveraging artificial intelligence to create smart, adaptive, and efficient solutions."
        },
        {
            icon: <Rocket size={24} />,
            title: "Software Consulting",
            description: "Providing strategic guidance to help businesses optimize their software architecture and processes."
        }
    ];

    return (
        <section id="about" style={{ padding: '6rem 0', position: 'relative' }}>
            {/* Background Gradient */}
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '0',
                width: '100%',
                height: '100%',
                background: 'radial-gradient(ellipse at left, rgba(99,102,241,0.05) 0%, rgba(0,0,0,0) 50%)',
                zIndex: -1,
                pointerEvents: 'none'
            }} />

            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    style={{ textAlign: 'center', marginBottom: '4rem' }}
                >
                    <h2 className="gradient-text">About Me</h2>
                    <p style={{ margin: '0 auto', maxWidth: '700px', fontSize: '1.125rem', color: 'var(--text-secondary)' }}>
                        I am a dedicated software engineer with a passion for solving complex problems through technology.
                        My journey involves deep-diving into modern frameworks and emerging tech to deliver value-driven results.
                    </p>
                </motion.div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2rem'
                }}>
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            className="glass-panel"
                            style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -5, borderColor: 'var(--accent-primary)' }}
                        >
                            <div style={{
                                width: '50px',
                                height: '50px',
                                background: 'rgba(99, 102, 241, 0.1)',
                                borderRadius: '12px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'var(--accent-primary)'
                            }}>
                                {skill.icon}
                            </div>
                            <h3 style={{ fontSize: '1.25rem' }}>{skill.title}</h3>
                            <p style={{ color: 'var(--text-secondary)' }}>
                                {skill.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
