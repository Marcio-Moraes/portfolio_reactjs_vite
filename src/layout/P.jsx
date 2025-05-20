import React from "react";

const P = (props) => {
    return(
        <p style={{
            marginTop: props.mt,
            marginBottom: props.mb,
            textAlign: props.align,
            lineHeight: '1.4em',
        }}>{props.texto}</p>
    )
}

export default P;