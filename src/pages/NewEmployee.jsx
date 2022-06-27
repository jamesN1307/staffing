import React, { Component } from 'react';

class NewEmployee extends Component {
    constructor(props) {
        super(props);

        this.initialState = {
            name: '',
            position: '',
            keycode: '',
            phoneNumber: '',
            onCall: '',
            specialTraining: '',
            notes: ''
        };
        // this.handleChange = this.handleChange.bind( this );
        this.state = this.initialState;
    }

    handleChange = event => {
        const { name, position, keycode, phoneNumber, onCall, specialTraining, notes, value } = event.target;

        this.setState({
            [name]: value,
            [position]: value,
            [keycode]: value,
            [phoneNumber]: value,
            [onCall]: value,
            [specialTraining]: value,
            [notes]: value,
        });
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        this.setState(this.initialState);
        fetch("http://localhost:3001/api/staff", { 
            method: "POST", 
            body: JSON.stringify(this.state),
            headers: {
                "Content-Type": "application/json",
              },
        }) .then((res) => (res.json))
        console.log(this.state)
    }

    render() {
        const { name, position, keycode, phoneNumber, onCall, specialTraining, notes } = this.state;

        return (
            <form className="flex flex-col columns-2" onSubmit={this.onFormSubmit}>
                <label>Full Name:</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    value={name}
                    onChange={this.handleChange} />
                <label>Position</label>
                <input
                    type="text"
                    name="position"
                    id="position"
                    value={position}
                    onChange={this.handleChange} />
                <label>Shift</label>
                <input
                    type="text"
                    name="keycode"
                    id="keycode"
                    value={keycode}
                    onChange={this.handleChange} />
                <label>Phone Number:</label>
                <input
                    type="text"
                    name="phoneNumber"
                    id="phoneNumber"
                    value={phoneNumber}
                    onChange={this.handleChange} />
                <label>On Call:</label>
                <input
                    type="text"
                    name="onCall"
                    id="onCall"
                    value={onCall}
                    onChange={this.handleChange} />
                <label>Special Training:</label>
                <input
                    type="text"
                    name="specialTraining"
                    id="specialTraining"
                    value={specialTraining}
                    onChange={this.handleChange} />
                <label>Notes:</label>
                <input
                    type="text"
                    name="notes"
                    id="notes"
                    value={notes}
                    onChange={this.handleChange} />
                <button type="submit">
                    Submit
                </button>
            </form>
        );
    }
}

export default NewEmployee;