import React from 'react';

function ThemeToggle() {
    const [isDark, setIsDark] = React.useState(false);

    React.useEffect(() => {
        // Verificar preferência do usuário ou tema salvo
        const savedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        
        const theme = savedTheme ? savedTheme : (prefersDark ? 'dark' : 'light');
        setIsDark(theme === 'dark');
        
        if (theme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'dark');
        } else {
            document.documentElement.removeAttribute('data-theme');
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = !isDark;
        setIsDark(newTheme);
        
        if (newTheme) {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.removeAttribute('data-theme');
            localStorage.setItem('theme', 'light');
        }
    };

    return (
        <div 
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Alternar tema"
            role="button"
            tabIndex={0}
            onKeyPress={(e) => e.key === 'Enter' && toggleTheme()}
        >
            <i className="fas fa-sun"></i>
            <i className="fas fa-moon"></i>
        </div>
    );
}

export default ThemeToggle;