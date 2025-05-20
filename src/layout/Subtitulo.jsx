import React from "react";
import colors from "../cores/colors";


const Subtitulo = (props) => {
    return(
        <div style={{
            borderBottom: `solid 1px ${colors.azul}`,
            marginTop: props.mt,
            marginBottom: props.mb,
        }}>
            <h3         
            style={{
                margin: '0',
                fontWeight: '700',
                fontSize: '1.6em',
                letterSpacing: '1px',
                textAlign: 'center',
                
                color: colors.branco1,
            }}>
                {props.texto}
            </h3>
        </div>
    )
}

export default Subtitulo;