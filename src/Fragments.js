import React from 'react';
import Welcome from "./Welcome";

/**
 * Component yapisi kapsayici bir eleman kullanmadan sadece <tr><td> gibi bir cok satiri
 * return ediyor olabilir. Bu durumda fragment ile kapsanabilirler.
 */
function Fragments(props) {
    return (
        <React.Fragment key="11">
            <tr>
                <td>Isim</td>
                <td>Yas</td>
            </tr>
        </React.Fragment>
    );

}

/**
 * Fragment kisa yazilisi ise <></> isaretleri arasinda yazmaktir. Fakat bu sekilde key
 * kullanimi muumkun olmaz.Key disinda bir attr kullanmazlar.
 */
export default Fragments;
