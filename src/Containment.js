import React from 'react';
import Welcome from "./Welcome";

function Containment(props) {
    // Containment isimli componen baska bir componenti props gonderip cagrabiliyor
    return (
        <div>
            <Welcome name="Containment!"/>
            <hr/>
            {props.comp}
            <hr/>

            {props.children}
        </div>
    );

}

export default Containment;
