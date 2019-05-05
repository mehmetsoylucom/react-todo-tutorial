import React from 'react';

/**
 * icinde HTML form barindiran componente kontrollu komponent deniyor
 */
class FormSample extends React.Component {
    constructor(props) {
        super(props);
        // State tanimi burada setState olmadan yapiliyor
        this.state = {value: ''};

        // Bind islemini burada yapmak tavsiye edilendir
        this.handSubmit = this.handSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        // Fonksiyonu gonderen elemana ulasim sekli event.target
        // Burada ekstra olarak buyuk harfe cevirdik
        this.setState({value: event.target.value.toUpperCase()});
    }

    handSubmit(event) {
        // Guncel state durumunu cagrip gosteriyoruz
        alert('isim : ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handSubmit}>
                <label>Isim nedir?</label>
                <input type="text" name="name"
                       // value icerigi state uzerinden geliyor
                       value={this.state.value}
                       onChange={this.handleChange}/>
                <input type="submit" value="Uyaridan Ismi Goster"/>
            </form>
        );
    }
}


export default FormSample;
