// import style from './style.css';
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux';
import * as actions from '../../actions';

export class Counter extends Component {
  constructor(props) {
    super(props)
  }


  render() {
    return (
      <div>
        This is a Counter
      </div>
    )
  }
}

// Counter.propTypes = {
//   value: PropTypes.number.isRequired
// }

const mapStateToProps = (state) => ({
    // value: state.counter
});

export default connect(mapStateToProps)(Counter);
