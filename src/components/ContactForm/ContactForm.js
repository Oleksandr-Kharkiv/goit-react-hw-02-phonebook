import React, { Component } from 'react';
import { nanoid } from 'nanoid';
// import PropTypes from 'prop-types';
import css from './ContactForm.module.css';

export class ContactForm extends Component {
  state = {
    name: '',
    tel: '',
  };

  nameInputId = nanoid();
  telInputId = nanoid();

  handleInputChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };
  reset = () => {
    this.setState({
      name: '',
      tel: '',
    });
  };
  const;
  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor={this.nameInputId}>Name</label>
          <input
            id={this.nameInputId}
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleInputChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />

          <label htmlFor={this.telInputId}>Number</label>
          <input
            id={this.telInputId}
            type="tel"
            name="tel"
            value={this.state.tel}
            onChange={this.handleInputChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />

          <button type="submit" className={css.btn}>
            Add to contact
          </button>
        </form>
      </>
    );
  }
}
