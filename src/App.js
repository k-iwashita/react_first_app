import React, { Component } from 'react';


// class App extends Component {
//   render() {
//     return(
//       <React.Fragment>
//         <label>kkkk</label>
//         <input type="text" onClick={ () => {console.log('kensho')}}></input>
//       </React.Fragment>
//     );
//   }
// }

const App = () => {
  return (
    <div>
      <Cat />
      <Cat />
      <Cat />
      <Cat />
    </div>

  )
}

const Cat = () => {
  return <div>hi!</div>
}

export default App;
