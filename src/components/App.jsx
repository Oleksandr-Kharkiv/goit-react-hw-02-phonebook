import React, { Component, Fragment } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
// import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
// import { Statistics } from './Statistics/Statistics';
// import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
    contacts: [],
    filter: ''
  }

  render() {
    return (
      <div className='wrap'>
        <div>
          <h1>Phonebook</h1>
          <ContactForm />

          {/* <h2>Contacts</h2>
          <Filter ... />
          <ContactList ... /> */}
        </div>
      </div>
    );
  }
}
