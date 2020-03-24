import axios from 'axios';
import React from 'react';

export default class Autocomplete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      countries: [],
    };
  }

  handleInput = async ({ target: { value } }) => {
    if (value) {
      this.request(value);
    } else {
      this.setState({ countries: [] });
    }
    this.setState({ text: value });
  }

  request = async (text) => {
    const res = await axios.get('/countries', { params: { term: `${text}` } });
    this.setState({ countries: [...res.data] });
  }

  renderCountries() {
    const { countries } = this.state;
    return <ul>{countries.map((country) => <li key={country}>{country}</li>)}</ul>;
  }

  render() {
    const { countries, text } = this.state;
    return (
      <div>
        <form>
          <div className="form-group">
            <input onChange={this.handleInput} value={text} type="text" className="form-control" placeholder="Enter Country" />
          </div>
        </form>
        {countries.length > 0 && this.renderCountries()}
      </div>
    );
  }
}