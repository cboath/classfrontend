import './App.css';
import Table from '@material-ui/core/Table';
import Card from '@material-ui/core/Card'
import { AppBar, LinearProgress, TableBody, TableCell, TableHead, TableRow, Typography } from '@material-ui/core';
import axios from 'axios';
import React,  { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = { persons: [], loading: false };
  }

  componentDidMount() {
    this.getPeople();
  }

  async getPeople() {
    const self = this;
    self.setState({loading:true})
    const response = await axios.get(`https://38bpl6uik6.execute-api.us-east-1.amazonaws.com/NonProd/students`)
    self.setState({persons: response.data.Items, loading:false})
  }

  render() {
    let table;
    if (this.state.loading) {
      table = <LinearProgress/>
    } else {
      table = (        
      <Table>
        <TableHead> 
          <TableRow>
            <TableCell>
              Employee ID
            </TableCell>
            <TableCell>
              First Name
            </TableCell>
            <TableCell>
              Last Name
            </TableCell>
            <TableCell>
              LOS
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          { this.state.persons.map((student) => (
          <TableRow key={student.EmployeeId.N}>
            <TableCell>{student.EmployeeId.N}</TableCell>
            <TableCell>{student.Fname.S}</TableCell>
            <TableCell>{student.LName.S}</TableCell>
            <TableCell>{student.LOS.S}</TableCell>
          </TableRow>
          ))}
        </TableBody>
    </Table>);
    }
    return (
      <div className="App">
        <AppBar style={{position: "inherit", minHeight: "48px", backgroundColor: "#404040"}}>
          <Typography variant="h3" style= {{ marginTop: "8px"}} >Teater</Typography>
        </AppBar>
        <Card style={{width: "1080px", margin: "auto", marginTop: "20px" }}>
         { table }
        </Card>
      </div>
    );
  }
}

export default App;
