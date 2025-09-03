function LoadingSpinner({ size = 'medium' }) {
    const sizeClass = {
        small: '1rem',
        medium: '2rem',
        large: '3rem'
    };

    return (
        <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center',
            padding: '2rem'
        }}>
            <div style={{
                width: sizeClass[size],
                height: sizeClass[size],
                border: '3px solid #f3f3f3',
                borderTop: '3px solid var(--primary)',
                borderRadius: '50%',
                animation: 'spin 1s linear infinite'
            }}></div>
            
            <style>
                {`
                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
                `}
            </style>
        </div>
    );
}

export default LoadingSpinner;