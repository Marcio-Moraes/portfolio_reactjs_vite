import React from "react";
import colors from "./cores/colors";
import whatsApp from './assets/icons/whatsApp.svg'

const Footer = () => {
    return(
        <footer>
            <p style={{
                textAlign: 'center',
                minHeight: '10vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: colors.text_footer,
            }}>
                Márcio Moraes - Desenvolvedor Front End - 2025
            </p>

            <a 
                href="#" 
                target="_blank"
                style={{
                    position: 'fixed',
                    right: '30px',
                    bottom: '30px',
                }}
            >
                <img src={whatsApp} alt="WhatsApp Márcio Moraes" style={{maxWidth: '90px'}} />
            </a>
        </footer>
    )
}

export default Footer;