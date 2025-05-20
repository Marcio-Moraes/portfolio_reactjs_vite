import React, { useState } from "react";
import colors from "../cores/colors";
import { Link } from "react-router-dom";

const Botao = (props) => {
    const [hover, setHover] = useState(true);

    const style = {
        backgroundColor: hover ? colors.azul : colors.azulhover,
        color: colors.branco1,
        fontWeight: '400',
        fontSize: props.fonte,
        padding: '14px 24px',
        marginTop: props.mt,
        textTransform: 'uppercase',
        display: 'block',
        textAlign: 'center',
        textDecoration: 'none',
        boxShadow: `1px 1px 3px` + colors.bg_escuro1,
        borderRadius: '0px',
        border: 'none',
        cursor: 'pointer',        
    }


    return(
        <Link to={props.link} 
            style={style}
            onMouseEnter={() => setHover(false)}
            onMouseLeave={() => setHover(true)}
            onClick={props.clickfunction}
            >
                {props.texto}
        </Link>
    )
}

export default Botao;