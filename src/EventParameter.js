import React from 'react';

class EventParameter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {color: "blue", border: 1};
    }

    changeColor(choose, e) {
        this.setState(prevState => ({
            color: choose
        }));
    }

    /**
     * Degisken tanimi olarak fonksiyon eklendiginde
     * bind etmek gerekmiyor. Parametre kullanilabiliyor
     */
    colorChange = (choose) => (e) => {
        this.setState(prevState => ({
            color: choose
        }));
    };

    render() {
        return (
            <div>
                <button onClick={(e) => this.changeColor('red', e)}>Red</button>
                <button onClick={this.changeColor.bind(this, 'green')}>Green</button>
                <button onClick={this.colorChange('blue')}>Blue</button>
                <hr/>
                <table bgcolor={this.state.color}>
                    <tr>
                        <td>
                            <span style={{color: "white"}}>Colored Table</span>
                        </td>
                    </tr>
                </table>
            </div>

        );
    }
}

export default EventParameter;
