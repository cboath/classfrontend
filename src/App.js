import './App.css';
import Table from '@material-ui/core/Table';
import Card from '@material-ui/core/Card'
import { AppBar, LinearProgress, TableBody, TableCell, TableHead, TableRow, Typography } from '@material-ui/core';
import axios from 'axios';
import React,  { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = { positions: [], loading: false };
  }

  componentDidMount() {
    this.getPeople();
  }

  async getPeople() {
    const self = this;
    self.setState({loading:true})
    const response = await axios.get(`https://mm23oahxk4.execute-api.us-east-1.amazonaws.com/NonProd/positions`)
    console.log('HERE IT BE: ', response)
    self.setState({positions: response.data, loading:false})
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
          { this.state.positions.map((stock) => (
          <TableRow key={stock[0]}>
            <TableCell>{stock[0]}</TableCell>
            <TableCell>{stock[1]}</TableCell>
            <TableCell>{"Hi"}</TableCell>
            <TableCell>{"Also Hi"}</TableCell>
          </TableRow>
          ))}
        </TableBody>
    </Table>);
    }
    return (
      <div className="App">
        <AppBar style={{position: "inherit", minHeight: "48px", backgroundColor: "#404040"}}>
          <Typography variant="h3" style= {{ marginTop: "8px"}} >Teater DU UI</Typography>
        </AppBar>
        <Card style={{width: "1080px", margin: "auto", marginTop: "20px" }}>
         { table }
        </Card>
      </div>
    );
  }
}

export default App;
