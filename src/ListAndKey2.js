import React from 'react';


function ListAndKey2(props) {
    const numbers = props.numbers;

    // Return icinde JSX yazilmakta. Burada array.map kullanimi asagidaki gibi olabilir
    return (
        <div>
            <ul>
                {numbers.map((item) =>
                    <li>{item}</li>
                )}
            </ul>
        </div>
    );
}

export default ListAndKey2;
