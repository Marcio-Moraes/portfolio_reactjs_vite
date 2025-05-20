import React from "react";
import Caixa from "../layout/Caixa";
import Caixatitle from "../layout/Caixatitle";
import Titulo from "../layout/Titulo";
import P from "../layout/P";
import Input from "../layout/form/Input";
import Textarea from "../layout/form/Textarea";
import colors from "../cores/colors";
import Imagem from "../layout/Imagem";
import whatsApp from "../assets/icons/whatsApp.svg";
import gmail from "../assets/icons/gmail-novo.svg"

const styleIconesContato = {
    width: '100%',
    maxWidth: '40px',
    margin: "10px"
}


const Contato = () =>{
    return(
        <>
        <Caixa>
            <Caixatitle alturam="15vh">
                <Titulo titulo="Fale" tituloazul="Comigo!" mb="10px" />
                <P mb="20px" align="center" texto="Márcio Moraes - Desenvolvedor Front-End" />
                <P mb="20px" align="center" texto="Você pode entrar em contato por E-mail, Linkedin, ou pelo Whatsapp. Ou ainda preenchendo o formulário." />
            </Caixatitle>

            
        </Caixa>
        <Caixa>
            <section 
                style={{
                    width: '100%',
                    minHeight: '40vh',
                    display: 'flex',
                    justifyContent: 'center',
                    flexWrap: 'wrap',
                    gap: '20px',
                    padding: '0 40px',
                }}
            >
                <div style={{
                    width: '100%',
                    maxWidth: '500px',
                    padding: '10px',
                    boxSizing: 'border-box'
                }}>
                    <a href="https://wa.me/5581986709660?text=Oi%20M%C3%A1rcio%2C%20vim%20pelo%20Site!" target="_blank">
                        <Imagem src={whatsApp} alt="WhatsApp" style={styleIconesContato} />
                    </a>
                    <a href="mailto:marciomoraes.cdd@gmail.com" target="_blank">
                        <Imagem src={gmail} alt="WhatsApp" style={styleIconesContato} />
                    </a>
                </div>
                <div style={{
                    width: '100%',
                    maxWidth: '500px',
                    padding: '10px',
                    boxSizing: 'border-box',
                    display: 'none'
                }}>
                    <form action="" style={{
                        padding: '40px 30px',
                        boxSizing: 'border-box',
                        backgroundColor: colors.azul,
                    }}>
                        <Input id="nome" label="Nome completo" tipo="text" holder="Seu nome" />
                        <Input id="email" label="Email" tipo="email" holder="email@exemplo.com.br" />
                        <Input id="telefone" label="Telefone" tipo="text" holder="(00) 0 0000-0000" />
                        <Textarea id="mensagem" label="Mensagem" holder="Mensagem" />
                    </form>
                </div>
            </section>
        </Caixa>
        </>
    )
}

export default Contato;