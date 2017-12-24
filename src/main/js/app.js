const React = require('react');
const ReactDOM = require('react-dom')

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {employees: []};
  
  }

  componentDidMount() {
    client({method: 'GET', path: '/api/employees'}).done(respone => {
      console.log(response)
      this.setState({employees: response.entity._embedded.employees});
    });

  }

  render() {
    console.log(this.state)
    return (
      <EmployeeList employees={this.state.employees}/>
    )
  }
}

class EmployeeList extends React.Component{
  render() {
    var employees = this.props.employees.map(employee =>
      <Employee key={employee._links.self.href} employee={employee}/>
    );
    return (
      <table>
        <tbody>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Description</th>
          </tr>
          {employees}
        </tbody>
      </table>
    )
  }
}

class Employee extends React.Component{
  render() {
    return (
      <tr>
        <td>{this.props.employee.firstName}</td>
        <td>{this.props.employee.firstName}</td>
        <td>{this.props.employee.firstName}</td>
      </tr>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)