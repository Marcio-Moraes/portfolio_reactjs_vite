import React from "react";
import Caixa from "../layout/Caixa";
import Caixatitle from "../layout/Caixatitle";
import Titulo from "../layout/Titulo";
import Botao from "../layout/Botao";
import P from '../layout/P';
import Icones from "../layout/Icones";





const Home = () => {
    return(
        <Caixa 
            style={{
                justifyContent: 'center',
                alignItems: 'center',
        }}>
            <Caixatitle alturam="65vh">                
                <Icones />
                <Titulo titulo="Márcio" tituloazul="Moraes" mb="10px" />
                <P mb="10px" texto="Desenvolvedor Front-End" />
                <P mb="50px" texto="Nextjs/Reactjs, Typescript, Tailwindcss, Git/GitHub" />

                
                <Botao texto="Me contratar" link="/contato" />
                <Botao texto="Veja meus projetos" mt="10px" link="/projetos" />
            </Caixatitle>
        </Caixa>
    )
}

export default Home;