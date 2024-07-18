import React from 'react';
import { Link as ReactRouterLink, useNavigate } from 'react-router-dom';

const Link = ({ children, to }) => {
    const navigate = useNavigate();
    
    const handleClicked = () => {
        const bars = document.getElementById('bars');
        bars?.classList.add('show');
        
        // Espera a que la animación de show termine
        setTimeout(() => {
            bars?.classList.remove('show');
            bars?.classList.add('hide');
            setTimeout(() => navigate(to), 200); // Ajusta este tiempo según sea necesario
        }, 800); // Tiempo de duración de la animación show
    };

    return (
        <ReactRouterLink onClick={handleClicked} to={to}>
            {children}
        </ReactRouterLink>
    );
};

export default Link;
