import React from "react";

const Caixatitle = (props) => {
    return(
        <div 
            className="caixatitle"
            style={{
                margin: 'auto',
                maxWidth: '520px',
                minHeight: props.alturam,
                padding: '10px',
                boxSizing: 'border-box',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
            }}
        >
            {props.children}
        </div>
    );
}

export default Caixatitle;