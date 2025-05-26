import React, {useEffect, useState} from "react";
import Caixa from "../layout/Caixa";
import Caixatitle from "../layout/Caixatitle";
import Titulo from "../layout/Titulo";
import P from "../layout/P";
import Botao from "../layout/Botao";
import Imagem from '../layout/Imagem';
import listaProjetos from '../assets/dados/listaprojetos';
import colors from "../cores/colors";
import Icones from '../layout/Icones';
import ListaProjeto from "../layout/ListaProjeto";






const styleDivBotoesProjetos ={ 
    margin: '0 auto 30px auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    width: '100%',
    padding: '0 20px',
    gap: '10px'
}

const styleDivProjetosPai = {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    minHeight: '60vh',
    margin: 'auto',
    boxSizing: 'border-box',
}

const styleListaProjetosDiv = {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    gap: '10px',
    margin: '30px 0px',
    boxSizing: 'border-box',
}

const styleItemProjeto = {
    maxWidth: '430px',
    minHeight: '360px',
    border: `solid 1px ${colors.azul}`,    
    boxShadow: `1px 1px 3px ${colors.bg_escuro1}`,
    padding: '20px',
    boxSizing: 'border-box'
}



const Projetos = () =>{
    const [listaNext, setListaNext] = useState(false);
    const [listaReactjs, setlistaReactjs] = useState(false);
    const [listaJS, setListaJS] = useState(false);
    const [listaWp, setListaWp] = useState(false);
    const [tech, setTech] = useState(true);


    const projetosNextjs = listaProjetos.filter(itemP => itemP.tecnologias === '#nextjs');    
    const projetosReactjs = listaProjetos.filter(itemP => itemP.tecnologias === '#reactjs');    
    const projetosJavascript = listaProjetos.filter(itemP => itemP.tecnologias === '#javascript');    
    const projetosWordPress = listaProjetos.filter(itemP => itemP.tecnologias === '#wordpress');    

    
    

    function handleclick(event) {
        let nomeFiltro = event.target.innerText.toLowerCase();
        if(nomeFiltro === 'todos' ){            
            setListaNext(false);
            setlistaReactjs(false);
            setListaJS(false);
            setListaWp(false);            
            setTech(true);
        }else if(nomeFiltro === 'nextjs' ){
            setListaNext(true);
            setlistaReactjs(false);
            setListaJS(false);
            setListaWp(false);            
            setTech(false);
        }else if(nomeFiltro === 'reactjs' ){
            setListaNext(false);
            setlistaReactjs(true);
            setListaJS(false);
            setListaWp(false);            
            setTech(false);
        }else if(nomeFiltro === 'javascript' ){
            setListaNext(false);
            setlistaReactjs(false);
            setListaJS(true);
            setListaWp(false);            
            setTech(false);
        }else if(nomeFiltro === 'wordpress' ){
            setListaNext(false);
            setlistaReactjs(false);
            setListaJS(false);
            setListaWp(true);            
            setTech(false);
        }
    }
    


    return(
        <Caixa direction="column">
            <Caixatitle alturam="20vh">
                <Icones />
                <Titulo titulo="Veja alguns" tituloazul="Projetos" mb="10px" />
                <P mb="20px" texto="Desenvolvedor Front-End" />

                
            </Caixatitle>

            <div style={styleDivProjetosPai}>
                    <div style={styleDivBotoesProjetos}>
                        <Botao texto="Todos" fonte="12px" clickfunction={handleclick} />
                        <Botao texto="NextJS" fonte="12px" clickfunction={handleclick} />
                        <Botao texto="ReactJS" fonte="12px" clickfunction={handleclick} />
                        <Botao texto="Javascript" fonte="12px" clickfunction={handleclick} />
                        <Botao texto="WordPress" fonte="12px" clickfunction={handleclick} />
                    </div>

                    <div style={styleListaProjetosDiv}>
                            {tech && 
                                <ListaProjeto lista={listaProjetos} />
                            }                      


                            {listaReactjs && 
                                <ListaProjeto lista={projetosReactjs} />
                            }

                            {listaNext && 
                                <ListaProjeto lista={projetosNextjs} />
                            }

                            {listaJS && 
                                <ListaProjeto lista={projetosJavascript} />
                            }

                            {listaWp && 
                                <ListaProjeto lista={projetosWordPress} />
                            }
                    </div>




                </div>
        </Caixa>
    )
}

export default Projetos;