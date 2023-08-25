import React from "react";

const FORM_URL = 'https://forms.office.com/r/bCAyi1W99t';

const Form = () => {
    return (
        <div style={{ overflow: 'hidden', position: 'relative', paddingBottom: '56.25%' }}>
            <iframe 
                src={FORM_URL} 
                frameBorder="0" 
                marginWidth="0" 
                marginHeight="0" 
                style={{
                    border: 'none', 
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%'
                }}
                allowFullScreen
                webkitallowfullscreen
                mozallowfullscreen
                msallowfullscreen
            />
        </div>
    )
}

export default Form;
