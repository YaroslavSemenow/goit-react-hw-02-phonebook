import shortid from 'shortid';

export default function ContactList({ contacts }) {
  return (
    <ul>
      {contacts.map(contact => (
        <li key={shortid.generate()}>
          {contact.name}: {contact.number}
        </li>
      ))}
    </ul>
  );
}
