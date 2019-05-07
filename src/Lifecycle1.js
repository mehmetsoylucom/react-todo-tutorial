import React from 'react';

/**
 * Her componentin, lifecycle fonksiyonları vardır.
 * İçerisinde will geçen fonksiyonlar component oluşturulmasından
 * hemen önce çağrılırken, içerisinde did geçen fonksiyonlar
 * component kaldırıldıktan sonra çağrılır.
 */
function Lifecycle1(props) {

    return (
        <div>
            Hello!
        </div>
    );

}

export default Lifecycle1;

/**
 Mounting : Component DOM’a eklendiğinde çağrılır:
    - constructor()
    - componentWillMount()
    - render()
    - componentDidMount()

 Updating : props ya da state guncellemesi gibi durumlarda cagrilanlar
    - componentWillReceiveProps()
    - shouldComponentUpdate()
    - componentWillUpdate()
    - render()
    - componentDidUpdate()

 Unmounting : component DOM’dan kaldırıldığında çağrılır.
    - componentWillUnmount()

 Error Handling : render sırasında lifecycle fonksiyonlarında veya herhangi bir
                  alt componentin constructoründe bir hata olduğunda çağrılır
    - componentDidCatch()

 Diğer API'ler :  Her component aşağıdaki API’leride içerisinde barındırır:
    - setState()
    - forceUpdate()
*/
