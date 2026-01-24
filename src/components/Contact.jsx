import React from 'react';
import { Mail, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

const WhatsAppIcon = ({ size = 24, color = "currentColor" }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill={color}
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M17.472 14.382C17.11 14.382 16.29 14.382 15.65 14.721C15.01 15.06 14.89 15.201 14.77 15.342C14.65 15.483 14.29 16.091 14.17 16.232C14.05 16.48 13.93 16.48 13.75 16.48C13.57 16.48 13.51 16.48 11.75 15.703C10.73 15.251 9.61 14.162 8.65 12.989C8.41 12.693 8.19 12.382 7.99 12.085C7.91 11.972 8.01 11.873 8.09 11.774C8.17 11.675 8.27 11.534 8.35 11.393C8.43 11.252 8.53 11.111 8.65 10.955C8.77 10.8 8.83 10.644 8.89 10.503C8.95 10.362 8.95 10.22 8.89 10.107C8.83 9.994 8.53 9.246 8.41 8.948C8.29 8.651 8.17 8.368 8.05 8.072C7.93 7.789 7.81 7.789 7.69 7.789C7.57 7.789 7.45 7.789 7.29 7.789C7.13 7.789 6.89 7.789 6.69 7.93C6.49 8.072 6.01 8.411 6.01 9.385C6.01 10.36 6.73 11.237 6.85 11.393C6.97 11.548 8.69 14.205 11.53 15.435C13.57 16.311 14.25 16.311 14.87 16.311C15.89 16.311 17.53 15.632 17.89 14.785C18.25 13.937 18.25 13.23 18.19 13.089C18.13 12.948 17.83 12.948 17.472 14.382ZM11.99 21.949C10.19 21.949 8.49 21.483 7.01 20.663L6.65 20.465L2.83 21.469L3.89 17.724L3.65 17.342C2.73 15.844 2.25 14.106 2.25 12.339C2.25 6.983 6.61 2.631 11.97 2.631C14.59 2.631 17.03 3.648 18.87 5.499C20.71 7.351 21.73 9.796 21.73 12.353C21.73 17.695 17.37 21.949 11.99 21.949ZM11.97 0.652C5.53 0.652 0.29 5.909 0.29 12.353C0.29 14.417 0.83 16.353 1.79 18.064L0.25 23.633L5.95 22.135C7.75 23.11 9.79 23.633 11.97 23.633C18.41 23.633 23.65 18.375 23.65 11.929C23.65 5.483 18.41 0.652 11.97 0.652Z" />
    </svg>
);

const Contact = () => {
    return (
        <section id="contact" style={{ padding: '6rem 0' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    style={{ textAlign: 'center', marginBottom: '4rem' }}
                >
                    <h2 className="gradient-text">Get In Touch</h2>
                    <p style={{ margin: '0 auto', maxWidth: '600px' }}>
                        Interested in working together? Feel free to reach out for collaborations or just say hello.
                    </p>
                </motion.div>

                <div style={{ maxWidth: '800px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>

                    <motion.a
                        href="https://wa.me/2348139041002"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="glass-panel"
                        style={{ padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', textDecoration: 'none', color: 'var(--text-primary)' }}
                        whileHover={{ y: -5, borderColor: '#25D366' }} // WhatsApp Green
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <div style={{ padding: '1rem', background: 'rgba(37, 211, 102, 0.1)', borderRadius: '50%', color: '#25D366' }}>
                            <WhatsAppIcon size={32} color="#25D366" />
                        </div>
                        <h3 style={{ fontSize: '1.25rem', marginBottom: '0' }}>WhatsApp</h3>
                        <p style={{ color: 'var(--text-secondary)' }}>+234 813 904 1002</p>
                    </motion.a>

                    <motion.a
                        href="mailto:ugochukwu.anunihu@gmail.com"
                        className="glass-panel"
                        style={{ padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', textDecoration: 'none', color: 'var(--text-primary)' }}
                        whileHover={{ y: -5, borderColor: 'var(--accent-primary)' }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <div style={{ padding: '1rem', background: 'rgba(99, 102, 241, 0.1)', borderRadius: '50%', color: 'var(--accent-primary)' }}>
                            <Mail size={32} />
                        </div>
                        <h3 style={{ fontSize: '1.25rem', marginBottom: '0' }}>Email</h3>
                        <p style={{ color: 'var(--text-secondary)' }}>ugochukwu.anunihu@gmail.com</p>
                    </motion.a>

                    <motion.a
                        href="https://www.linkedin.com/in/ugochukwu-anunihu-b928b4a9/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="glass-panel"
                        style={{ padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', textDecoration: 'none', color: 'var(--text-primary)' }}
                        whileHover={{ y: -5, borderColor: '#0077b5' }} // LinkedIn Blue
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <div style={{ padding: '1rem', background: 'rgba(0, 119, 181, 0.1)', borderRadius: '50%', color: '#0077b5' }}>
                            <Linkedin size={32} />
                        </div>
                        <h3 style={{ fontSize: '1.25rem', marginBottom: '0' }}>LinkedIn</h3>
                        <p style={{ color: 'var(--text-secondary)' }}>View Profile</p>
                    </motion.a>

                </div>
            </div>
        </section>
    );
};

export default Contact;
