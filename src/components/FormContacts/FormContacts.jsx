import React, { Component } from "react";
import { nanoid } from "nanoid";

class FormContacts extends Component {
    state = {
        name: '',
        number: '',
    };


    handleChange = event => {
        const { name, value } = event.currentTarget;
        this.setState({ [name]: value} );
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.name, this.state.number);
        this.setState({name: "", number: ""});
    }

    render() {
        const nameId = nanoid();
        const numberId = nanoid();
        const { name, number } = this.state;

        return(
            <form onSubmit={this.handleSubmit}>
                <label htmlFor={ nameId }>Name</label>
                <input
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    value={name}
                    onChange={this.handleChange}
                    id={ nameId }
                />
                <label htmlFor={ numberId }>Number</label>
                 <input
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    value={number}
                    onChange={this.handleChange}
                    id={numberId}
                />
                <button type="submit">Add contact</button>                   
            </form>  
        );
    }
};

export default FormContacts;