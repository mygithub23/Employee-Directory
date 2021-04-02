import React from 'react';
import ReactDOM from 'react-dom';

class employeeProfile extends React.Component {
  constructor(){
    super();
    this.state = {
      employees: []
    };
  }
  componentWillMount() {
    fetch('https://randomuser.me/api/?results=50')
    .then(res => {
      if(res.ok) return res.json();
      throw new Error('Error retrieving data.');
    })
    .then(data => {
      this.setState({employees: data.results});
    })
    .catch(error => {
      console.log(error);
    });
  }

  render() {
    const list = this.state.employees.map( (u, i) => {
        return <User key={u.login.md5} name={`${u.name.first} ${u.name.last}`} email={u.email} />;
    });
    return (
      <div>
        <h1>Employees' record:</h1>
        {list}
      </div>
    );
  }
}

class User extends React.Component {
  render() {
    return (
      <div style={{'borderStyle': 'dotted'}}>
        <h3>{this.props.name}</h3>
        <p>{this.props.email}</p>
      </div>
    );
  }
}

ReactDOM.render(
  <employeeProfile />,
  document.getElementById('root')
);




export default App;
