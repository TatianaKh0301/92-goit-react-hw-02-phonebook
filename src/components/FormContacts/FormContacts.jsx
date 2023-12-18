import React, { Component } from "react";
import { nanoid } from "nanoid";

class FormContacts extends Component {
    state = {
        name: '',
        number: '',
    };

    handleChange = (event) => {
        this.setState({name: event.currentTarget.value});
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.name);
        this.setState({name: "", number: ""});
    }

    render() {
        const nameId = nanoid();
        return(
            <form onSubmit={this.handleSubmit}>
                <label htmlFor={ nameId }>Name</label>
                <input
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    value={this.state.name}
                    onChange={this.handleChange}
                    id={ nameId }
                />
                <button type="submit">Add contact</button>                   
            </form>  
        );
    }
};

export default FormContacts;