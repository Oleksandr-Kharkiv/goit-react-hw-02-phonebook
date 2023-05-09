import PropTypes from 'prop-types';
import css from './Contact.module.css';

export const Contact = ({ id, name, number, deleteContact }) => {
  return (
    <li className={css.contactItem} key={id}>
      <span>
        {name}:{' '}
        <a href="tel:({number})" className={css.tel}>
          {number}
        </a>
      </span>
      <button className={css.btnDel} onClick={() => deleteContact(id)}>
        Delete
      </button>
    </li>
  );
};

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
