import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getData } from '../actions';

import '../App.css';

class AppForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ingresos: 0,
      devoluciones: 0
    }
    this.createInput = this.createInput.bind(this);
  }
  componentDidMount() {
    this.props.getData();
  }

  createForm(data, i) {
    switch (data.type) {
      case 'group':
        return (
          <h1>{data.text}</h1>
        );
      case 'title':
        return (
          <h3>{data.text}</h3>
        );
      case 'text':
        return (
          <div>
            <label>{data.text}</label>
            <input type="text" />
          </div>
        )
      case 'list':
        return (
          <div>
            <label>{data.text}</label>
            <select>
              <option value="true">Si</option>
              <option value="false">No</option>
            </select>
          </div>
        )
      case 'currency':
        return this.createInput(data);
      default:
        return (
          <div>Loading...</div>
        );
    }
  }
  createInput(data, i) {
    if (data.is_calculated) {
      return (
        <div>
          <label>{data.text}</label>
          <input type="number" disabled={true} value={this.calculateValues(data.code)} />
        </div>
      );
    } else {
      return (
        <div>
          <label>{data.text}</label>
          <input type="number" min="1" step="any" onChange={e => this.valueInputs()} />
        </div>
      )
    }
  }
  valueInputs(data, value) {
    
  }
  calculateValues(code) {
    
  }

  render() {
    return (
      <main>
        {this.props.reducerApp.data &&
          this.props.reducerApp.data.map((data, i) => this.createForm(data, i))
        }
      </main>
    );
  }
}
function mapStateToProps({ reducerApp }) {
  return {
    reducerApp
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getData
  }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(AppForm);