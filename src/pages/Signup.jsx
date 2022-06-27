import React, { Component } from 'react'

class Signup extends Component {
    constructor(props) {
        super(props);

        this.initialState = {
            username: '',
            password: '',
            firstName: '',
            lastName: '',
            phoneNumber: '',
            notes: ''
        };
        // this.handleChange = this.handleChange.bind( this );
        this.state = this.initialState;
    }

    handleChange = event => {
        const { username, password, firstName, lastName, phoneNumber, notes, value } = event.target;

        this.setState({
            [username]: value,
            [password]: value,
            [firstName]: value,
            [lastName]: value,
            [phoneNumber]: value,
            [notes]: value,
        });
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        this.setState(this.initialState);
        fetch("http://localhost:3001/api/admin", {
            method: "POST",
            body: JSON.stringify(this.state),
            headers: {
                "Content-Type": "application/json",
            },
        }).then((res) => (res.json))
        console.log(this.state)
    }

    render() {
        const { firstName, lastName, username, password, phoneNumber, notes } = this.state;
        const current = new Date();
        const today = `${current.getMonth() + 1}/${current.getDate()}/${current.getFullYear()}`

        return (
            <div>
                <header className='columns-2'>
                    <h1>Sign Up</h1>
                    <h1>Date: {today}</h1>
                </header>
                <br></br>
                <form className="flex flex-col columns-2" onSubmit={this.onFormSubmit}>
                    <label>First Name:</label>
                    <input
                        type="text"
                        name="firstName"
                        id="firstName"
                        value={firstName}
                        onChange={this.handleChange} />
                    <label>Last Name:</label>
                    <input
                        type="text"
                        name="lastName"
                        id="lastName"
                        value={lastName}
                        onChange={this.handleChange} />
                    <label>Username:</label>
                    <input
                        type="text"
                        name="username"
                        id="username"
                        value={username}
                        onChange={this.handleChange} />
                    <label>Password:</label>
                    <input
                        type="text"
                        name="password"
                        id="password"
                        value={password}
                        onChange={this.handleChange} />
                    <label>Phone Number:</label>
                    <input
                        type="text"
                        name="phoneNumber"
                        id="phoneNumber"
                        value={phoneNumber}
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
            </div>
        );
    }
}

export default Signup;
