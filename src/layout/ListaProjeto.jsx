import React from "react";
import colors from '../cores/colors'
import Imagem from "./Imagem";



const styleItemProjeto = {
    maxWidth: '430px',
    minHeight: '360px',
    border: `solid 1px ${colors.azul}`,    
    boxShadow: `1px 1px 3px ${colors.bg_escuro1}`,
    padding: '20px',
    boxSizing: 'border-box'
}

const ListaProjeto = ({lista}) => {
    return(
        <>
        {lista.map((item, indexItem)=>(                                 
                <div style={styleItemProjeto} key={indexItem} className={item.tecnologias}>
                    <Imagem src={item.img} alt={item.img} style={{width: '100%'}} />
                    <div style={{
                        display: 'flex',
                        alignItems: 'center', justifyContent: 'space-between', width: '100%',
                    }}>
                        <div style={{display: 'flex',flexDirection: 'column', flex: '1'}}>
                            <a style={{
                                backgroundColor: colors.azul,
                                color: colors.branco1,
                                margin: '10px 0',
                                display: 'flex',
                                justifyContent: 'center',
                            }}
                                href={item.link}
                                target="_blank"
                            >
                                link
                            </a>
                            <a 
                                href={item.link} 
                                target="_blank"
                                style={{
                                    color: colors.branco1,
                                    textDecoration: 'none',
                                    textTransform: 'uppercase',
                                    marginBottom: '30px'
                                }}
                            >
                                {item.name}
                            </a>
                            <div className="div_description">
                                <p>
                                    {item.description}
                                </p>
                            </div>
                        </div>

                        <div style={{
                            flex: '1'
                        }}>
                            <a 
                                href={item.gitcode} 
                                target="_blank"
                                style={{
                                    color: colors.branco1,
                                    textDecoration: 'none',
                                    fontWeight: 'bold',
                                    borderTop: `solid 1px ${colors.azul}`,
                                    marginTop: '10px',

                                }}
                            >
                                Code
                            </a>
                        </div>
                    </div>
                    
                    {item.tecnologias}
                </div>
        ))}
        </>
    )
}

export default ListaProjeto;