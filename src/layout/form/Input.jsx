import React from "react";

const Input = ({id, label, tipo, holder}) => {
    return(
        <div style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column'
        }}>
            <label htmlFor={id}>{label}</label>
            <input 
                id={id} 
                type={tipo} 
                placeholder={holder} 
                style={{
                    padding: '10px',
                    borderRadius: '0',
                    border: 'none',
                    marginBottom: '20px',
                    
                }}
            />
        </div>
    )
}

export default Input;