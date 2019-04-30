import React from 'react';

/**
 => React eventleri, camelCase ile isimlendirilir. ( onClick gibi )
 => React’te varsayılan davranışı engellemek için false return etmektir. Ornegin;
     function handleClick(e) {
        e.preventDefault();
        console.log('Bağlantıya tıklandı.');
      }

 */
class Eventer extends React.Component {
    /**
     * State & event function bind
     * @param props
     */
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true, another:"test"};

        // Click gibi olayların çalışabilmesi için bind gerekiyor.
        this.handleClick = this.handleClick.bind(this);
    }

    /**
     * Bu fonksiyon setState ile prevState aliyor ve ustune isToggleOn degerini
     * tersi ile degistirerek yaziyor.
     */
    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    render() {
        /**
         * onClick bir function cagrisina direkt olarak yonlendirilebiliyor
         */
        return (
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? 'Açık' : 'Kapalı'}
            </button>
        );
    }
}

/**
 * >>> Constructorde bind etmek onerilendir. <<<
 *
 * JavaScript’te, class fonskyionları varsayılan olarak bağlı değildir.
 * this.handleClick‘i bind etmeyi (bağlamayı) unutursanız ve onClick'e
 * iletirseniz, fonksiyon çağrıldığında bu undefined olur.
 *
 *
 * Fonksiyon boyle yazilsaydi, bir degisken icinde bir fonksiyon olsaydi bind gerekmeyecekti.
 *
 * handleClick = () => {
 *   console.log(this);
 * }
 *
 * Ya da asagidaki gibi cagrildiginda normal yazilmis bir fonksiyona ulasabilecekti.
 *
 * <button onClick={(e) => this.handleClick(e)}>
 *
 * Bu durum JS'de fonksiyonlarin islemesi ile ilgilidir.
 */

export default Eventer;
