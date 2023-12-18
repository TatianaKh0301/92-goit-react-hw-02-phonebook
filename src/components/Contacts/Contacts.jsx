import React from "react";
import { ListWrapper } from "./Contacts.styled";

const Contacts = ({ contacts }) => (
    <>
        <h1>Contacts</h1>
        <ListWrapper>
            {contacts.map(({id, name}) => 
                (<li key={id} className="TodoList__item">
                    <p className="TodoList__text">{name}</p>
                </li>)
            )}
        </ListWrapper>
    </>
   
);

export default Contacts;