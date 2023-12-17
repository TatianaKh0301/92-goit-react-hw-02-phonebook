import React, { Component } from "react";
// import { nanoid } from 'nanoid';

class App extends Component {
    state = {
        contacts: [],
        name: ''
    }

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

                <form>
                    <label htmlFor="">
                        <input
                            type="text"
                            name="name"
                            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                            required
                        />
                    </label>                    
                </form>                              
            </div>
    );
  };
};

export default App;
