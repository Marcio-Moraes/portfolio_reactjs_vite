import React from "react";
import colors from "../cores/colors";


const Titulo = (props) => {
    return(
        <h1
         className="titulopadrao"
         style={{
            margin: '0',
            fontWeight: '700',
            fontSize: '3.0em',
            letterSpacing: '1px',
            textAlign: 'center',
            marginBottom: props.mb,
        }}>
            {props.titulo} <span style={{
                color: colors.azul,
            }}>
                {props.tituloazul}                
            </span>
        </h1>
    )
}

export default Titulo;