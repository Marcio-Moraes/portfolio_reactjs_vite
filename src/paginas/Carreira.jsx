import React from "react";
import Caixa from '../layout/Caixa'
import Caixatitle from "../layout/Caixatitle";
import Titulo from "../layout/Titulo";
import Botao from '../layout/Botao';
import P from "../layout/P";
import Subtitulo from "../layout/Subtitulo";


const Carreira = ()=> {
    return(
        <Caixa>
            <Caixatitle>
                <Titulo titulo="Carreira" tituloazul="!" />
                <P mb="20px" mt="30px" align="center" texto="Abaixo também segue meu currículo completo com as experiências profissionais." />
                
                
                <Subtitulo texto="MM Agência Digital" mb="10px" mt="30px" />
                <P texto="De Março de 2019 até o momento - Desenvolvedor Front-End Pleno" mb="30px" />
                
                <Subtitulo texto="Agência Weber" mb="10px" mt="30px" />
                <P texto="De Março de 2022 até Abril de 2025 - Desenvolvedor Front-End Pleno" mb="30px" />

                <Subtitulo texto="Sites Recife" mb="10px" mt="30px" />
                <P texto="De Dezembro de 2019 até Julho de 2021 - Desenvolvedor Front-End Pleno" mb="30px" />

                <Subtitulo texto="Promova Comunicação e Marketing" mb="10px" mt="30px" />
                <P texto="De Março de 2019 até Dezembro de 2019 - Desenvolvedor Front-End" mb="30px" />

                <Botao texto="Curriculo completo" link="" />
            </Caixatitle>
        </Caixa>        
    );
}

export default Carreira;