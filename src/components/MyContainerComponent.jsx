import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import store from '../store.jsx'
import {todoApp} from '../action.jsx'

// Create the component that you want to make smart.
class MyContainerComponent extends React.Component {

  // Here you have access to the Dispatcher through the props.
  doAction(e) {
    console.log('doAction', store);
      store.dispatch({
          type: 'SOME_ACTION',
          data: 'clicked'
      });
  }

  render() {
    //console.log('render', this.props, store.getState());
    //let data = store.getState();
    console.log('store.getState', this.props);

      // And you have access to the selected fields of the State too!
      return <div onClick={this.doAction}>
      <button>Click</button> data={this.props.data}
      </div>;
  }
}

/*MyContainerComponent.propTypes = {
  onClick: PropTypes.func.isRequired
}*/


// Select the props which you want to inject in the component,
// given the global state.
function select(state) {
    //console.log('select', state, state.todo.data);
    return {
        data: state.todo.data
    };
}

// Wrap the component to inject the Dispatcher and the State into it.
export default connect(select)(MyContainerComponent);

