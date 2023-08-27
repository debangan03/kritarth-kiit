import React, { useRef, useEffect } from "react";
import PerfectScrollbar from 'perfect-scrollbar';
import 'perfect-scrollbar/css/perfect-scrollbar.css';

const FORM_URL = 'https://forms.office.com/r/bCAyi1W99t';

const Form = () => {
    const iframeRef = useRef(null);

    useEffect(() => {
        const ps = new PerfectScrollbar(iframeRef.current.contentWindow.document.body);
        return () => ps.destroy();
    }, []);

    return (
        <div style={{ overflow: 'hidden', position: 'relative', minHeight: '100vh' }}>
            <iframe 
                ref={iframeRef}
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

<div className="fixed top-0 -z-20 right-0 w-screen h-screen back">

</div>
        </div>
    )
}

export default Form;
