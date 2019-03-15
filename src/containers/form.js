import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

import { getData } from '../actions';

import '../App.scss';

class AppForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.renderInput = this.renderInput.bind(this);
  }
  componentDidMount() {
    this.props.getData();
  }

  renderForm(data, i) {
    switch (data.type) {
      case 'group':
        return <h1>{data.text}</h1>;
      case 'title':
        return <h3>{data.text}</h3>;
      case 'text':
        return (
          <div>
            <label>{data.text}</label>
            <br/>
            <input type="text" />
          </div>
        );
      case 'list':
        return (
          <div>
            <label>{data.text}</label>
            <br/>
            <select>
              <option value="true">Si</option>
              <option value="false">No</option>
            </select>
          </div>
        );
      case 'currency':
        return this.renderInput(data);
      default:
        return <div>Loading...</div>;
    }
  }
  renderInput(data) {
    if (data.is_calculated) {
      return (
        <div>
          <label>{data.text}</label>
          <br/>
          <input
            type="number"
            disabled={true}
            value={this.calculateValues(data.code)}
          />
        </div>
      );
    } else {
      return (
        <div>
          <label>{data.text}</label>
          <br/>
          <input
            type="number"
            min="1"
            step="any"
            onChange={e => this.valueInputs(e, data)} />
        </div>
      );
    }
  }

  valueInputs(e, data) {
    this.setState({ [data.code]: e.target.value });
  }

  calculateValues(code) {

    switch (code) {
      case "1.1.4.5":
        if (!this.state['1.1.4.3'] || !this.state['1.1.4.4']) {
          return '';
        } else {
          return Math.max(0, parseInt(this.state['1.1.4.3']) - parseInt(this.state['1.1.4.4']));
        }
      case "1.1.4.11":
        if (!this.state['1.1.4.8'] || !this.state['1.1.4.9'] || !this.state['1.1.4.10']) {
          return '';
        } else {
          return Math.max(0, parseInt(this.state['1.1.4.9']) + parseInt(this.state['1.1.4.10']) - parseInt(this.state['1.1.4.8']));
        }
      case "1.1.4.25":
        return (
          parseInt(this.state['1.1.4.13']) +
          parseInt(this.state['1.1.4.14']) +
          parseInt(this.state['1.1.4.15']) +
          parseInt(this.state['1.1.4.16']) +
          parseInt(this.state['1.1.4.17']) +
          parseInt(this.state['1.1.4.18']) +
          parseInt(this.state['1.1.4.19']) +
          parseInt(this.state['1.1.4.20']) +
          parseInt(this.state['1.1.4.21']) +
          parseInt(this.state['1.1.4.22']) +
          parseInt(this.state['1.1.4.23']) +
          parseInt(this.state['1.1.4.24'])
        )
      case "1.1.4.26.8":
        return (
          parseInt(this.state['1.1.4.26.1']) +
          parseInt(this.state['1.1.4.26.2']) +
          parseInt(this.state['1.1.4.26.3']) +
          parseInt(this.state['1.1.4.26.4']) +
          parseInt(this.state['1.1.4.26.5']) +
          parseInt(this.state['1.1.4.26.6']) +
          parseInt(this.state['1.1.4.26.7'])
        )
    }
  }

  render() {
    console.log('state', this.state);
    return (
      <main>
        <form>
          {this.props.reducerApp.data &&
            this.props.reducerApp.data.map((data, i) => this.renderForm(data, i))
          }
        </form>
        <Link to="/">
          <button>Volver</button>
        </Link>
      </main>
        );
      }
    }
function mapStateToProps({reducerApp}) {
  return {
          reducerApp
        };
      }
      
function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
          getData
        },
        dispatch
      );
    }
    export default connect(
      mapStateToProps,
      mapDispatchToProps
)(AppForm);