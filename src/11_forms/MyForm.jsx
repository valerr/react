import React from 'react';

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        email: '',
        password: '',
        address: '',
        city: '',
        country: '',
        acceptRules: false,
      },
      formState: 'form',
    };
  }

  handleChange = (e) => {
    const { form } = this.state;
    const { target } = e;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ form: { ...form, [target.name]: value } });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ formState: 'table' });
  }

  handleBackButton = (e) => {
    e.preventDefault();
    this.setState({ formState: 'form' });
  }

  renderForm() {
    const { form } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="inputEmail4" className="col-form-label">Email</label>
            <input onChange={this.handleChange} value={form.email} type="email" name="email" className="form-control" id="inputEmail4" placeholder="Email" />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputPassword4" className="col-form-label">Password</label>
            <input onChange={this.handleChange} value={form.password} type="password" name="password" className="form-control" id="inputPassword4" placeholder="Password" />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="inputAddress" className="col-form-label">Address</label>
          <textarea onChange={this.handleChange} value={form.address} type="text" className="form-control" name="address" id="inputAddress" placeholder="1234 Main St" />
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="inputCity" className="col-form-label">City</label>
            <input onChange={this.handleChange} value={form.city} type="text" className="form-control" name="city" id="inputCity" />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputCountry" className="col-form-label">Country</label>
            <select onChange={this.handleChange} value={form.country} id="inputCountry" name="country" className="form-control">
              <option>Choose</option>
              <option value="argentina">Argentina</option>
              <option value="russia">Russia</option>
              <option value="china">China</option>
            </select>
          </div>
        </div>
        <div className="form-group">
          <div className="form-check">
            <label className="form-check-label" htmlFor="rules">
              <input onChange={this.handleChange} checked={form.acceptRules} id="rules" type="checkbox" name="acceptRules" className="form-check-input" />
              Accept Rules
            </label>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">Sign in</button>
      </form>
    );
  }

  renderTable() {
    const { form } = this.state;
    const data = Object.entries(form).sort().map(([key, value]) => (
      <tr key={key}>
        <td>{key}</td>
        <td>{value.toString()}</td>
      </tr>
    ));

    return (
      <div>
        <button onClick={this.handleBackButton} type="button">Back</button>
        <table className="table">
          <tbody>
            {data}
          </tbody>
        </table>
      </div>
    );
  }

  render() {
    const { formState } = this.state;
    if (formState === 'form') {
      return this.renderForm();
    }
    return this.renderTable();
  }
}