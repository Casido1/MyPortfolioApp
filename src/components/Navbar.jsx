import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'Projects', href: '#projects' },
        { name: 'About', href: '#about' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-4 glass-panel border-b border-white/10' : 'py-6 bg-transparent'
                }`}
            style={{
                position: 'fixed',
                width: '100%',
                zIndex: 1000,
                backgroundColor: isScrolled ? 'var(--nav-bg)' : 'transparent',
                backdropFilter: isScrolled ? 'blur(10px)' : 'none',
                borderBottom: isScrolled ? '1px solid var(--border-glass)' : 'none',
                padding: isScrolled ? '1rem 0' : '1.5rem 0',
                transition: 'all 0.3s ease'
            }}
        >
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <a href="#" style={{ fontSize: '1.5rem', fontWeight: 700, fontFamily: 'Outfit, sans-serif' }}>
                    Portfolio<span className="gradient-text">.</span>
                </a>

                {/* Desktop Nav */}
                <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }} className="desktop-nav">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            style={{
                                color: 'var(--text-secondary)',
                                fontWeight: 500,
                                fontSize: '0.95rem'
                            }}
                            onMouseEnter={(e) => e.target.style.color = 'var(--text-primary)'}
                            onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
                        >
                            {link.name}
                        </a>
                    ))}
                    <div style={{ marginLeft: '1rem' }}>
                        <ThemeToggle />
                    </div>
                </div>

                {/* Mobile Toggle */}
                <div className="mobile-toggle" style={{ display: 'none', alignItems: 'center', gap: '1rem' }}>
                    <ThemeToggle />
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        style={{ background: 'none', border: 'none', color: 'var(--text-primary)', cursor: 'pointer' }}
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div style={{
                    position: 'absolute',
                    top: '100%',
                    left: 0,
                    right: 0,
                    background: 'var(--bg-primary)',
                    backdropFilter: 'blur(20px)',
                    borderBottom: '1px solid var(--border-glass)',
                    padding: '2rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1.5rem',
                    alignItems: 'center',
                    height: 'calc(100vh - 80px)', // adjust based on header height
                    overflowY: 'auto'
                }}>
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            style={{
                                color: 'var(--text-primary)',
                                fontSize: '1.25rem',
                                fontWeight: 500
                            }}
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
            )}
            <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: flex !important; }
        }
      `}</style>
        </nav>
    );
};

export default Navbar;
