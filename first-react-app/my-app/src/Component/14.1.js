import React, { Component } from 'react';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  //! only once after FIRST render
  componentDidMount() {
    this.myRef.current.focus();
  }
  componentDidUpdate() {} //? After every update

  render() {
    return (
      <div>
        <input ref={this.myRef} />
      </div>
    );
  }
}
