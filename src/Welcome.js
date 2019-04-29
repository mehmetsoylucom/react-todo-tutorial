import React from 'react';

/*
Componentleri küçük parçalara bölmek başlangıçta gereksiz bir iş
yada zaman kaybı gibi gözükebilir, ancak daha büyük uygulamalarda
tekrar kullanılabilir component paletine sahip olmak önemlidir.
 */
function Welcome(props) {
    // Burada gelen props uzerinde bir islem yapmamaliyiz.
    // Islem yapilacaksa sadece return kisminda yapilmalidir.
    // Yani gelen parametreler degismemelidir
    // props sadece okuma iznine sahiptir gibi dusunmeliyiz.
    return (
        <span>
            Merhaba, {props.name}
        </span>
    );
}

export default Welcome;
