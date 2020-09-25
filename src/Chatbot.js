import React, { useEffect } from "react";

const Chatbot = () => {

    useEffect(() => {
        obtenhaConfig()
    }, [])

    function obtenhaConfig() {
            (function(d, m){
                var kommunicateSettings = 
                    {"appId":"2736237af6c1a260fc3c652797883e60c","popupWidget":true,"automaticChatOpenOnNavigation":true};
                var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
                s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
                var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
                window.kommunicate = m; m._globals = kommunicateSettings;
            })(document, window.kommunicate || {});
    }

    return (
        <div></div>
    )
}

export default Chatbot;
