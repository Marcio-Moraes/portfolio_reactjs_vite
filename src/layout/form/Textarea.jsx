import React from "react";

const Textarea = ({id, label, holder}) => {
    return(
        <div style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column'
        }}>
            <label htmlFor={id}>{label}</label>
            <textarea 
                id={id} 
                placeholder={holder} 
                style={{
                    padding: '10px',
                    borderRadius: '0',
                    border: 'none',
                    marginBottom: '20px',
                    
                }}
            ></textarea>
        </div>
    )
}

export default Textarea;