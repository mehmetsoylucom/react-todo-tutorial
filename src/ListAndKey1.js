import React, {Fragment} from 'react';

/*
const listSample = [1, 2, 3, 4, 5];

const doubleListSample1 = listSample.map(function (number) {
    return number * 2;
});

// Kisa yazimi
const doubleListSample2 = listSample.map((number) => number * 2);
*/

function ListAndKey1(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
        <li>{number}</li>
    );

    // Listelerin benzersiz id'leri yoksa bu yöntemi kullanın.
    // buradaki key html olarak render edilmiyor, sadece react tarafindan kullaniliyor
    // Her key kendi alaninda ( scope ) benzersiz olmasi yeterli oluyor
    const listWithIndexKeys = numbers.map((number, index) =>
        <li key={index}>
            {number}
        </li>
    );

    // Keyler React’te bir ipucu işlevi görür ancak componentlere aktarılmazlar.
    // Componentlerde aynı değere ihtiyacınız varsa, açıkça farklı bir ada sahip bir props olarak iletebilirsiniz:
    // Asagidaki örnekte, Post componenti props.idyi okuyabilir, ancak props.keyi okuyamaz.
    /*
    const content = numbers.map((number) =>
        <Post
            key={post.id}
            id={post.id} />
    );
    */

    return (
        <div>
            <ul>{listItems}</ul>
            <ul>{listWithIndexKeys}</ul>
        </div>
    );
}

export default ListAndKey1;
