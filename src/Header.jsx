import React, { useState } from "react";
import { Link } from "react-router-dom";
import Caixa from "./layout/Caixa";
import colors from "./cores/colors";

const Header = () => {

    const [menuFloat, setMenuFloat] = useState(false);

    const styleItemMenu = {
        color: colors.branco1,
        padding: '10px 20px',
        textDecoration: 'none',
        textTransform: 'uppercase',
        fontSize: '13px',
        textAlign: 'center',
    }

    const styleBarraBotaoMenu = {
        width: '100%',
        maxWidth: '80px',
        height: '2px',
        backgroundColor: colors.branco1,
    }


    function handleClick() {
        setMenuFloat(!menuFloat);
    }

    return(
        <>
            {menuFloat && 
                <div 
                    onClick={()=>setMenuFloat(false)}
                    style={{
                        backgroundColor: colors.azulhover,
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        position: 'fixed',
                        let: '0',
                        top: '0',
                        zIndex: '9999999999999',
                }}>
                    <div style={{
                        width: '100%',
                        maxWidth: '300px',
                        padding: '40px 10px',
                        backgroundColor: colors.azul,
                        display: 'flex',
                        justifyContent: 'center'
                    }}>
                        <button 
                            onClick={()=>setMenuFloat(false)}
                            style={{
                                backgroundColor: colors.azul,
                                color: colors.branco1,
                                fontSize: '20px',
                                fontWeight: 'bold',
                                cursor: 'pointer',
                                width: '40px',
                                height: '40px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                position: 'fixed',
                                right: '40px',
                                top: '46px',
                            }}
                        >
                            X
                        </button>

                        <div>
                            <nav style={{
                            display: 'flex',
                            flexDirection: 'column'
                        }}
                        >
                            <Link 
                                to="/" 
                                style={styleItemMenu}                            
                            >
                                Home
                            </Link>
                            <Link 
                                to="/sobre" 
                                style={styleItemMenu}
                            >
                                Sobre
                            </Link>
                            <Link 
                                to="/projetos" 
                                style={styleItemMenu}
                            >
                                Projetos
                            </Link>
                            <Link 
                                to="/carreira" 
                                style={styleItemMenu}
                            >
                                Carreira
                            </Link>
                            <Link 
                                to="/contato" 
                                style={styleItemMenu}
                            >
                                Contato
                            </Link>
                        </nav>
                        </div>
                    </div>
                </div>
            }        
            <header>
                <Caixa>
                    <div className="div_logo_topo">
                        <Link to="/">
                            M
                        </Link>
                    </div>
                    <div className="div_nav">
                        <nav style={{
                            display: 'flex',                        
                        }}
                        >
                            <Link 
                                to="/" 
                                style={styleItemMenu}                            
                            >
                                Home
                            </Link>
                            <Link 
                                to="/sobre" 
                                style={styleItemMenu}
                            >
                                Sobre
                            </Link>
                            <Link 
                                to="/projetos" 
                                style={styleItemMenu}
                            >
                                Projetos
                            </Link>
                            <Link 
                                to="/carreira" 
                                style={styleItemMenu}
                            >
                                Carreira
                            </Link>
                            <Link 
                                to="/contato" 
                                style={styleItemMenu}
                            >
                                Contato
                            </Link>
                        </nav>
                    </div>
                    <div className="div_menu_topo">
                        <button onClick={handleClick} style={{
                            display: 'flex',
                            justifyContent: 'space-around',
                            flexDirection: 'column',
                            backgroundColor: colors.azul,
                            boxShadow: `1px 1px 3px ${colors.bg_escuro1}`,
                            minHeight: '40px',
                            minWidth: '40px',
                            padding: '6px',
                            cursor: 'pointer'
                        }}>
                            <div style={styleBarraBotaoMenu}></div>
                            <div style={styleBarraBotaoMenu}></div>
                            <div style={styleBarraBotaoMenu}></div>
                        </button>
                    </div>
                </Caixa>
            </header>
        </>
    )
};

export default Header;