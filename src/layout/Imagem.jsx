import React from "react";

const Imagem =  (props) =>{
    return(
        <img src={props.src} alt={props.alt} style={props.style} />
    )
}

export default Imagem;