import React from "react";
import Caixatitle from "../layout/Caixatitle";
import Caixa from "../layout/Caixa";
import Titulo from "../layout/Titulo";
import P from "../layout/P";
import Marcio from '../assets/marcio-moraes-desenvolvedor-front-end.jpg';
import Imagem from "../layout/Imagem";
import Icones from "../layout/Icones";
import Botao from "../layout/Botao";



const styleImage = {
    width: '100%',
    maxWidth: '620px',
    margin: '30px auto',
    display: 'block',    
}


const Sobre = () =>{
    return(
        <Caixa>
            <div style={{
                width: '100%',
                flex: '1'
            }}>
                <Imagem src={Marcio} alt="" style={styleImage} />
            </div>
            <Caixatitle alturam="80vh">
                <Titulo titulo=" Conheça um pouco" tituloazul="sobre mim." mb="40px" />

                <Icones />                
                <P mb="20px" align="center" texto="Desenvolvedor Front End com mais de 7 anos de experiência em desenvolvimento web. Já trabalhei para várias empresas como colaborador e também como freelancer. Desenvolvendo interfaces de sistemas web, criando lojas virtuais, landingPages, projetos institucionais dentre outros..." />
                <P mb="20px" align="center" texto="Utilizo as linguagens e tecnologias ReactJS, NextJS, Javascript, e/ou Typescript, Tailwindcss, Git GitHub, e também crio temas personalizados para WordPress" />
                <P mb="10px" align="center" texto="Já desenvolvi vários tipos de projetos. Veja um pouco do que já fiz." />

                <Botao texto="Meus Projetos" link="/projetos" />
            </Caixatitle>
        </Caixa>
    )
}

export default Sobre;