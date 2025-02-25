import React from 'react';
import { useNavigate } from 'react-router-dom';

const Menu: React.FC = () => {
    const navigate = useNavigate();

    const navigateTo = (path: string) => {
        navigate(path);
    };

    return (
        <div>
            <h1>Menu</h1>
            <button onClick={() => navigateTo('/cliente/home')}>Cliente</button>
            <button onClick={() => navigateTo('/empresa/dashboard')}>Empresa</button>
            <button onClick={() => navigateTo('/admin/dashboard')}>Administrador</button>
        </div>
    );
};

export default Menu;