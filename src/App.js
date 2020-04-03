import React, { Component } from 'react';
import PropTypes from 'prop-types'


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
  const profiles = [
    { name: 'Taro', age: 10 },
    { name: 'Hanako', age: 5 },
    { name: 'kkk', age: 44 }
  ]
  return (
    <div>
      {
        profiles.map((profile, index) => { 
          return <User name={profile.name} age={profile.age} key= {index} />
        })
      }
    </div>

  )
}

const User = (props) => {
return <div>Hi, i am {props.name}, and {props.age} years old</div>
}

// User.defaultProps = {
//   age: 1
// }

User.propTypes = {
  name: PropTypes.string,
   age: PropTypes.number.isRequired
}

export default App;
