import React from 'react';

/**
 * Componentin kendi icinde bir karar alarak
 * rendera katilmasini engellemek icin null gonderilebilir
 */
function PreventRender(props) {
    const renderMe = props.renderMe;
    if (!renderMe) {
        return null;
    }
    return <strong>Render edildi, sart saglandi.</strong>;
}

/**
 componentWillMount()
 bileşen oluşturulmadan önce

 componentDidMount()
 bileşen oluşturulduktan sonra

 componentWillReceiveProps(newProps)
 yeni props eklenmeden önce

 shouldComponentUpdate(newProps, newState)
 bileşenin güncellenip güncellenmeyeceği kararı verilir.
 (default olarak her zaman true döndürür)

 componentWillUpdate(nextProps, nextState)
 bileşen güncellenmeden önce

 componentDidUpdate(prevProps, prevState)
 bileşen güncellendikten sonra

 componentWillUnmount()
 bileşen DOM’dan silinmeden önce
*/

export default PreventRender;
