import React, { Component } from 'react';


class App extends Component {
  render() {
    return(
      <React.Fragment>
        <label>kkkk</label>
        <input type="text" onClick={ () => {console.log('kensho')}}></input>
      </React.Fragment>
    );
  }
}

export default App;
