import React from "react";
import ReactIcone from '../assets/icons/react.svg'
import NextIcone from '../assets/icons/nextjs.svg'
import Tailwindcss from '../assets/icons/tailwindcss.svg'
import Typescript from '../assets/icons/typescript.svg'
import Javascript from '../assets/icons/javascript.svg'
import Vite from '../assets/icons/vite.svg'
import Git from '../assets/icons/git.svg'
import Github from '../assets/icons/github.svg'
import WordPress from '../assets/icons/wordpress.svg'
import Imagem from "../layout/Imagem";





const styleLogos = {
    width: '100%',
    maxWidth: '40px',
    margin: '0px auto',
}

const styleDivLogos = {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '10px'
}


const Icones = () => {
    return(
        <div style={styleDivLogos}>
            <Imagem src={NextIcone} alt="" style={styleLogos}  />
            <Imagem src={ReactIcone} alt="" style={styleLogos}  />
            <Imagem src={Vite} alt="" style={styleLogos}  />
            <Imagem src={Typescript} alt="" style={styleLogos}  />
            <Imagem src={Javascript} alt="" style={styleLogos}  />
            <Imagem src={Tailwindcss} alt="" style={styleLogos}  />
            <Imagem src={Git} alt="" style={styleLogos}  />
            <Imagem src={Github} alt="" style={styleLogos}  />
            <Imagem src={WordPress} alt="" style={styleLogos}  />
        </div>
    )
}

export default Icones;