import React, { useState } from 'react';
import { Mail, Send, MapPin, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate submission
        console.log('Form submitted', formData);
        alert('Thanks for your message! This is a demo.');
    };

    return (
        <section id="contact" style={{ padding: '8rem 0', background: 'linear-gradient(to bottom, var(--bg-primary), var(--bg-secondary))' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'start' }}>

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="gradient-text" style={{ marginBottom: '1.5rem' }}>Let's work together</h2>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem', fontSize: '1.125rem' }}>
                            I'm currently available for freelance projects and open to full-time opportunities.
                            If you have a project in mind or just want to say hi, feel free to reach out!
                        </p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div className="glass-panel" style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <div style={{ padding: '0.75rem', background: 'rgba(99, 102, 241, 0.1)', borderRadius: '50%', color: 'var(--accent-primary)' }}>
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h4 style={{ marginBottom: '0.25rem' }}>Email</h4>
                                    <a href="mailto:hello@example.com" style={{ color: 'var(--text-secondary)' }}>hello@example.com</a>
                                </div>
                            </div>

                            <div className="glass-panel" style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <div style={{ padding: '0.75rem', background: 'rgba(168, 85, 247, 0.1)', borderRadius: '50%', color: 'var(--accent-secondary)' }}>
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h4 style={{ marginBottom: '0.25rem' }}>Location</h4>
                                    <p style={{ color: 'var(--text-secondary)' }}>San Francisco, CA</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Form */}
                    <motion.div
                        className="glass-panel"
                        style={{ padding: '2.5rem' }}
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <h3 style={{ marginBottom: '2rem' }}>Send a Message</h3>
                        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Name</label>
                                <input
                                    type="text"
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    style={{
                                        width: '100%',
                                        padding: '0.75rem 1rem',
                                        background: 'rgba(255,255,255,0.05)',
                                        border: '1px solid var(--border-glass)',
                                        borderRadius: 'var(--radius-sm)',
                                        color: 'white',
                                        outline: 'none'
                                    }}
                                    onFocus={(e) => e.target.style.borderColor = 'var(--accent-primary)'}
                                    onBlur={(e) => e.target.style.borderColor = 'var(--border-glass)'}
                                />
                            </div>

                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Email</label>
                                <input
                                    type="email"
                                    required
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    style={{
                                        width: '100%',
                                        padding: '0.75rem 1rem',
                                        background: 'rgba(255,255,255,0.05)',
                                        border: '1px solid var(--border-glass)',
                                        borderRadius: 'var(--radius-sm)',
                                        color: 'white',
                                        outline: 'none'
                                    }}
                                    onFocus={(e) => e.target.style.borderColor = 'var(--accent-primary)'}
                                    onBlur={(e) => e.target.style.borderColor = 'var(--border-glass)'}
                                />
                            </div>

                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Message</label>
                                <textarea
                                    required
                                    rows="4"
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    style={{
                                        width: '100%',
                                        padding: '0.75rem 1rem',
                                        background: 'rgba(255,255,255,0.05)',
                                        border: '1px solid var(--border-glass)',
                                        borderRadius: 'var(--radius-sm)',
                                        color: 'white',
                                        outline: 'none',
                                        resize: 'vertical'
                                    }}
                                    onFocus={(e) => e.target.style.borderColor = 'var(--accent-primary)'}
                                    onBlur={(e) => e.target.style.borderColor = 'var(--border-glass)'}
                                />
                            </div>

                            <button type="submit" className="btn btn-primary" style={{ marginTop: '1rem', width: '100%' }}>
                                Send Message <Send size={18} />
                            </button>
                        </form>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default About;
