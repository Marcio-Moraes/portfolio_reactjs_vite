import React from "react";

const Caixa = (props) => {
    return(
        <div 
            style={{
                width: '100%',
                maxWidth: '1480px',
                display: 'flex',
                flexDirection: props.direction,
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                alignItems: 'center',
                margin: 'auto',
                padding: '40px',
            }}
        >
            {props.children}
        </div>
    )
}

export default Caixa;