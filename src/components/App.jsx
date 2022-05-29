import { Component } from 'react';
import Container from './Container';
import Contacts from './Contacts';

class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  handleInputChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      contacts: [
        ...this.state.contacts,
        { name: this.state.name, number: this.state.number },
      ],
    });
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <Container>
        <form onSubmit={this.handleSubmit}>
          <h2>Phonebook</h2>
          <label>
            Name
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              onChange={this.handleInputChange}
              value={this.state.name}
              required
            />
          </label>
          <label>
            Number
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              onChange={this.handleInputChange}
              value={this.state.number}
              required
            />
          </label>
          <button type="submit">Add contact</button>
        </form>
        <Contacts contacts={this.state.contacts} />
      </Container>
    );
  }
}

export default App;
