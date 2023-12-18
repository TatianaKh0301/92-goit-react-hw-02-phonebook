import React, { Component } from "react";
import { nanoid } from "nanoid";
import FormContacts from "components/FormContacts";
import Contacts from "components/Contacts";
import { Wrapper } from "./App.styled";

class App extends Component {
    state = {
        contacts: [],
        name: '',
    };

    addText = (event) => {
        event.preventDefault();
        this.setState({contact: event.currentTarget.value});
    };

    addContact = ( text ) => {
        console.log("text", text);

        const contact = {
            id: nanoid(),
            name: text,
        }

        this.setState(({contacts}) => ({
            contacts: [contact, ...contacts],
        }));
    };

    render() {
        
        return (
            <div
                style={{
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: 40,
                color: '#010101'
            }}
            >
                <Wrapper>
                    <FormContacts onSubmit={this.addContact}/>                
                    <Contacts contacts={this.state.contacts}/> 
                </Wrapper>                                    
            </div>
    );
  };
};

export default App;
