import React from 'react';

class FormSampleMultiple extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            box1: true,
            box2: false
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        // Buradaki callback function state update olduktan sonra calisacak
        // Bu sekilde yazilmazsa React ne zaman state update eder belli degil
        // Performans sorunlari da bu sureyi degistirebilir, callback saglikli calisti
        this.setState({[name]: value}, function () {
            console.log(this.state);
        });
    }

    render() {
        return (
            <div>
                <form>
                    <label>Check Box 1
                        <input type="checkbox" onChange={this.handleChange} checked={this.state.box1}
                               name="box1"/></label>

                    <label>Check Box 2
                        <input type="checkbox" onChange={this.handleChange} checked={this.state.box2}
                               name="box2"/></label>
                </form>
                <br/>
                <br/>
                <br/>
            </div>
        );
    }
}

export default FormSampleMultiple;
