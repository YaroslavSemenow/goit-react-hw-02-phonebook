import shortid from 'shortid';

export default function Contacts({ contacts }) {
  return (
    <div>
      <h2>Contacts</h2>
      <ul>
        {contacts.map(contact => (
          <li key={shortid.generate()}>{contact}</li>
        ))}
      </ul>
    </div>
  );
}
