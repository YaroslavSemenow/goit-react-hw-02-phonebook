import { Component } from 'react';
import Container from './Container';
import Contacts from './Contacts';

class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  handleInputChange = e => {
    this.setState({ name: e.currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      contacts: [...this.state.contacts, this.state.name],
    });
    this.reset();
  };

  reset = () => {
    this.setState({ name: '' });
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
          <button type="submit">Add contact</button>
        </form>
        <Contacts contacts={this.state.contacts} />
      </Container>
    );
  }
}

export default App;
