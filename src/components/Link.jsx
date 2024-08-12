import React from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';

const Link = ({ children, to }) => {
    return (
        <ReactRouterLink  to={to}>
            {children}
        </ReactRouterLink>
    );
};

export default Link;
