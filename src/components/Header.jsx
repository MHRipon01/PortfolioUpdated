import React from 'react';

const Header = ({ isDark, toggleTheme }) => {
    return (
        <header style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '20px 40px',
            borderBottom: `1px solid ${isDark ? '#3d3d4a' : '#e5e4e7'}`,
            backgroundColor: isDark ? '#242533' : '#ffffff'
        }}>
            <h2 style={{
                margin: 0,
                fontSize: '24px',
                fontWeight: 'bold',
                color: isDark ? '#ffffff' : '#000000'
            }}>
                Ripon
            </h2>
            <button
                onClick={toggleTheme}
                style={{
                    padding: '10px 20px',
                    borderRadius: '8px',
                    border: 'none',
                    cursor: 'pointer',
                    backgroundColor: isDark ? '#ffffff' : '#000000',
                    color: isDark ? '#242533' : '#ffffff',
                    fontSize: '14px',
                    fontWeight: '600',
                    transition: 'all 0.3s ease'
                }}
            >
                {isDark ? '☀️' :'🌙' }
            </button>
        </header>
    );
};

export default Header;