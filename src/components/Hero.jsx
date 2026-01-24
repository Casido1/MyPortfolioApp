import React from 'react';
import { ArrowRight, Github, Linkedin, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';
import profileImg from '../assets/profile.jpg';

const Hero = () => {
    return (
        <section id="home" style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            position: 'relative',
            paddingTop: '80px',
            overflow: 'hidden'
        }}>
            {/* Background Elements */}
            <div style={{
                position: 'absolute',
                top: '20%',
                right: '-10%',
                width: '500px',
                height: '500px',
                background: 'radial-gradient(circle, rgba(99,102,241,0.15) 0%, rgba(0,0,0,0) 70%)',
                borderRadius: '50%',
                filter: 'blur(40px)',
                zIndex: -1
            }} />
            <div style={{
                position: 'absolute',
                bottom: '10%',
                left: '-5%',
                width: '400px',
                height: '400px',
                background: 'radial-gradient(circle, rgba(168,85,247,0.15) 0%, rgba(0,0,0,0) 70%)',
                borderRadius: '50%',
                filter: 'blur(40px)',
                zIndex: -1
            }} />

            <div className="container">
                <div style={{
                    maxWidth: '1200px',
                    margin: '0 auto',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4rem',
                    flexWrap: 'wrap'
                }}>
                    <div style={{ flex: 1, minWidth: '300px' }}>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <span style={{
                                color: 'var(--accent-primary)',
                                fontWeight: 600,
                                letterSpacing: '0.05em',
                                textTransform: 'uppercase',
                                marginBottom: '1rem',
                                display: 'block'
                            }}>
                                Welcome to my portfolio
                            </span>
                        </motion.div>

                        <motion.h1
                            style={{ marginBottom: '1.5rem' }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            I build <span className="gradient-text">digital experiences</span> that matter.
                        </motion.h1>

                        <motion.p
                            style={{ marginBottom: '2.5rem', maxWidth: '600px', fontSize: '1.25rem' }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            Specializing in .NET (C#) and Angular (Fullstack), AI Integration, and Software Consulting.
                        </motion.p>

                        <motion.div
                            style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            <a href="#projects" className="btn btn-primary">
                                View Work <ArrowRight size={18} />
                            </a>
                            <a href="#contact" className="btn btn-secondary">
                                Contact Me
                            </a>
                        </motion.div>

                        <motion.div
                            style={{ marginTop: '4rem', display: 'flex', gap: '1.5rem' }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                        >
                            <a href="#" style={{ color: 'var(--text-secondary)' }}><Github size={24} /></a>
                            <a href="#" style={{ color: 'var(--text-secondary)' }}><Linkedin size={24} /></a>
                            <a href="#" style={{ color: 'var(--text-secondary)' }}><Twitter size={24} /></a>
                        </motion.div>
                    </div>

                    <motion.div
                        style={{ flex: 1, minWidth: '300px', display: 'flex', justifyContent: 'center' }}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <div style={{
                            position: 'relative',
                            width: '100%',
                            maxWidth: '400px',
                            aspectRatio: '1',
                            borderRadius: '30px',
                            overflow: 'hidden',
                            boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
                            border: '4px solid rgba(255,255,255,0.1)'
                        }}>
                            <img
                                src={profileImg}
                                alt="Profile"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover'
                                }}
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
