import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Table from './table';
import Chart from './chart';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );


ReactDOM.render(<div style={{marginLeft: '100px'}}>
  <Grid container spacing={0}>
    <Grid item xs={12}>
    <h1> Data Analysis for CommRE</h1>
    <h4 style={{backgroundColor:'black', color:'white', width:'1150px', height: '25px'}}> <span style={{marginLeft:'20px'}}>Sales by Agent: Steve</span> </h4>
    </Grid>
    <Grid item>
      <Paper style={{height:'fit-content'}}>
        <Table />
      </Paper>
    </Grid>
    <Grid item>
      <Paper>
        <Chart />
      </Paper>
    </Grid>
  </Grid>
  </div>, document.querySelector('#root'));


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
