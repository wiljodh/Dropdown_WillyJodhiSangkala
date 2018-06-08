import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    First:'Choose Stage First!',
    poin:'',
    Level2:'',
    Level3:'',
    Level4:'',
    LevelChoosed:'Choose Level',
    LevelStaged:'Choose Stage'
    };
  
  One =() =>{     
    this.setState({
      LevelChoosed:'Pre-School Education' ,
      First:'Pre-School Education',
      poin:'PAUD (Early Childhood Education Programs)',
      Level2:'TK (Kindergarten)',
      Level3:'RA (Raudhatul Athfal)',
    });   
  }

  Two =() =>{     
    this.setState({
      LevelChoosed:'Basic Education' ,
      First:'Basic Education',
      poin:'SD (Primary School )',
      Level2:'MI (Madrasah Ibtidaiyah)',
      Level3:'SMP (Junior High School)',
      Level4:'MTS (Madrasah Tsanawiyah)',
    });   
  }

  Three =() =>{     
    this.setState({
      LevelChoosed:'Middle Education' ,
      First:'Middle Education',
      poin:'SMA (Senior High School)',
      Level2:'MA (Madrasah Aliyah)',
      Level3:'SMK (Vocational High School)',
    });   
  }

  Four =() =>{     
    this.setState({
      LevelChoosed:'Higher Education' ,
      First:'Higher Education',
      poin:'D3 Diploma',
      Level2:'S1/D4 Bachelor',
      Level3:'S2 Magister',
      Level4:'S3 Doctor',
    });   
  }

  render() {

    return (
      <div>
<center>
  <h1 style={{fontSize:"30px",fontWeight:"bold",marginTop:"20px"}}>EDUCATION STAGE</h1>
 <div className="container" style={{marginTop:"20px"}}>
  <div class="btn-group">
    <button type="button" class="btn btn-success dropdown-toggle" data-toggle="dropdown"
     style={{width: "300px"}}>{this.state.LevelChoosed}</button>
    <div class="dropdown-menu">
        <a className="dropdown-item" onClick= {this.One}>Pre-School Education</a>
        <a className="dropdown-item" onClick= {this.Two} >Basic Education</a>
        <a className="dropdown-item" onClick= {this.Three} >Middle Education</a>
        <a className="dropdown-item" onClick= {this.Four} >Higher Education</a>
    </div>
  </div>
  </div>
       
       <br/><br/><br/><br/><br/><br/><br/><br/>
       { this.state.poin == '' ? 
         <h5>{this.state.First}</h5> :
         <div>
            <u><h5>{this.state.First}</h5></u>
            <p>{this.state.poin}</p>
            <p>{this.state.Level2}</p>
            <p>{this.state.Level3}</p>
            <p>{this.state.Level4}</p> 
          </div>
        }
    </center>
    </div>
    );
  }
}

export default App;