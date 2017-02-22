import React, { Component } from 'react';
import '../stylesheets/RegionPicker.css';

class RegionPicker extends Component {

  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.onChange(event.target.value);
  }

  render() {
    return (
      <span className="form-inline region-picker">
        <p>See results from:</p>
        <select className="form-control" onChange={this.handleChange}>
          <option value="ca">Canada</option>
          <option value="us">U.S.</option>
          <option value="mx">Mexico</option>
          <option value="br">Brazil</option>
          <option value="gb">Great Britain</option>
          <option value="fr">France</option>
          <option value="jp">Japan</option>
          <option value="au">Australia</option>
        </select>
      </span>
    );
  }
}

export default RegionPicker;
