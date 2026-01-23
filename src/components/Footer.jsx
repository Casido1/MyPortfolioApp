import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
    return (
        <footer style={{
            padding: '2rem 0',
            background: 'var(--bg-primary)',
            borderTop: '1px solid var(--border-glass)',
            textAlign: 'center',
            color: 'var(--text-secondary)',
            fontSize: '0.9rem'
        }}>
            <div className="container">
                <p style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                    © 2024 Portfolio. Made with <Heart size={16} fill="var(--accent-primary)" color="var(--accent-primary)" /> by Developer.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
