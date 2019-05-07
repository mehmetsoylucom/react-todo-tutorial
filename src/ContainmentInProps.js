import React from 'react';
import Containment from "./Containment";
import Welcome from "./Welcome";

class ContainmentInProps extends React.Component {
    constructor(props) {
        super(props);
    }

    // Containment isimli componen baska bir componenti props gonderip cagrabiliyor
    //
    render() {
        return (
            <div>
                <Containment comp={<Welcome name="Hello from ContainmentInProps!"/>}>
                    <button>Bu buton children ornegi</button>
                    <div>Bu yazi ContainmentInProps componentinden <br /> Containment componentine gonderildi.</div>
                </Containment>
            </div>
        );
    }
}

export default ContainmentInProps;
