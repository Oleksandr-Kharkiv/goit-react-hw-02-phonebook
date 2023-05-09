// import PropTypes from 'prop-types';
import css from './ContactList.module.css';

export const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul className={css.contactList}>
      {contacts.map(({id, name, number}) => (
        <li className={css.contactItem} key={id}>
         <span> {name} : {number}</span>
          <button className={css.btnDel} onClick={()=>deleteContact(id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

//   ContactList.propTypes = {
//     onLeaveFeedback: PropTypes.func.isRequired,
//     options: PropTypes.objectOf(PropTypes.number.isRequired),
//   };
