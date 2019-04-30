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

export default Eventer;
