import React, { Component } from 'react';
import css from './ContactForm.module.css';

export class ContactForm extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  handleInputChange = e => { 
    const {name, value} = e.currentTarget;
      console.log(this.state);
    
      this.setState ({
    [name]: value,
  })};

  render() {
    return (
      <>
        <form>
        <label htmlFor="cont_name">Name</label>
          <input
            id="cont_name"
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleInputChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        

        <label htmlFor="cont_tel">Number</label>
          <input
            id="cont_tel"
            type="tel"
            name="number"
            value={this.state.number}
            onChange={this.handleInputChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        
        <button type='submit' className={css.btn}>Add to contact</button>
        </form>
      </>
    );
  }
}
