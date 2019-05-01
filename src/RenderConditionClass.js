import React from 'react';

/**
 * State kullanimi icin class sart oldugu icin class olusturuluyor
 */
class RenderConditionClass extends React.Component {
    constructor(props) {
        super(props);
        // Tavsiye edildigi gibi bind islemleri burada yapiliyor
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);

        // baslangic icin bile olsa state tanimlaniyor
        this.state = {isLoggedIn: false};
    }

    // state login icin guncelleniyor
    handleLoginClick() {
        this.setState({isLoggedIn: true});
    }

    // state logout icin guncelleniyor
    handleLogoutClick() {
        this.setState({isLoggedIn: false});
    }

    render() {
        // ilgili state degiskeni bu scope icin bir degiskene cevriliyor
        // const ile tanimli degisken icerigi sonradan degistirilemez
        // const tanimli degisken bir dizi ise bu degiskene veri girip cikabilir
        const isLoggedIn = this.state.isLoggedIn;

        // degistirilebilir bir degisken tanimi icin let kullaniliyor (es6 )
        // let ile bir degisken sadece 1 kere tanimlanabilir
        // let ile tanimlandigi blok disinda o degisken kullanilamaz.
        // buna block scope denir, if, while gibi blocklardir.
        let button = null;
        let button2 = null;

        // Render oncesi belirli bir kisim icin if kullanilip o kisim olusturuluyor
        if (!isLoggedIn) {
            button = <button onClick={this.handleLoginClick}>Login</button>;
        } else {
            button = <button onClick={this.handleLogoutClick}>Logout</button>
        }

        // short if kullanimi
        button2 = !isLoggedIn ? <button onClick={this.handleLoginClick}>short if Login</button> :
            <button onClick={this.handleLogoutClick}>short if Logout</button>;

        return (
            <div>
                {button}
                <hr/>
                {button2}
                <hr/>
                {// render icinde short if kullanimi
                    isLoggedIn ? (
                        <button onClick={this.handleLogoutClick}>in render short Logout</button>
                    ) : (
                        <button onClick={this.handleLoginClick}>in render short Login</button>
                    )
                }
            </div>
        );
    }
}

export default RenderConditionClass;
