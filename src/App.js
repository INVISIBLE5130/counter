import React from 'react';
import './App.css';
import {plusValue, minusValue} from './store/actionCreators/counterActionCreator'
import {connect} from 'react-redux'

function App(props) {
    console.log(props)

    function plusCount() {
        let counter = props.state.count
        counter++
        props.addCount(counter)
    }

    function minusCount() {
        let counter = props.state.count
        counter--
        props.minusCount(counter)
    }

  return (
    <div className="App">
      <p className='number'>{props.state.count}</p>
      <button onClick={minusCount} className='-'>-</button>
      <button onClick={plusCount} className='+'>+</button>
    </div>
  );
}

const mapStateToProps = (state) => {
    return {
        state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addCount: (value) => {
            dispatch(
                plusValue(value)
            )
        },
        minusCount: (value) => {
            dispatch(
                minusValue(value)
            )
        }
    }
}

export default connect (mapStateToProps, mapDispatchToProps)(App);
