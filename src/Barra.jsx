import React from "react";
import { House, SquareUser, User, PhoneOutgoing, BookOpenCheck, Armchair } from 'lucide-react';
import colors from './cores/colors';
import { Link } from 'react-router-dom';


const Barra = () => {
    return(
        <div style={{
            backgroundColor: 'rgb(0, 113, 183)',
            minHeight: '200px',
            width: '50px',
            position: 'fixed',
            left: '0',
            zIndex: 999,
            top: 'calc(50% - 116px)',  
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            boxShadow: '1px 1px 1px #333',
            gap: '26px',
            padding: '16px 3px',
        }}>
            <Link to="/portfolio_reactjs_vite">
                <House color={colors.branco1} size={26} />
            </Link>
            <Link to="/portfolio_reactjs_vite/sobre">
                <SquareUser color={colors.branco1} size={26} />
            </Link>
            <Link to="/portfolio_reactjs_vite/projetos">
                <BookOpenCheck color={colors.branco1} size={26} />
            </Link>
            <Link to="/portfolio_reactjs_vite/carreira">
                <Armchair color={colors.branco1} size={26} />
            </Link>
            <Link to="/portfolio_reactjs_vite/contato">
                <PhoneOutgoing color={colors.branco1} size={26} />
            </Link>
        </div>
    )
}

export default Barra;