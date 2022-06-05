import PropTypes from 'prop-types';

export default function ContactItem({ id, name, number, onDelete }) {
  return (
    <li>
      {name}: {number}
      <button onClick={() => onDelete(id)}>Delete</button>
    </li>
  );
}

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};
