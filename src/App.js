import React, { Component } from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import {Button,ButtonGroup,
        Form,FormGroup,ControlLabel,
        FormControl,HelpBlock,Checkbox,Radio,
        Grid,Row,Col
      } from 'react-bootstrap';


class App extends Component {
  state = {
    name:"",
    color:"",
   movies:[],
   cat:[],
    gender:"",
    place:"",
    
  };
  
  onChange = (fieldName)=>{
      return (event)=>{
        var state = this.state;
        state[fieldName]=event.target.value;
        this.setState(state);
  }
};

checkboxChange= (fieldName)=>{
return (event)=>{
    var targetArray = this.state[fieldName];
    if(targetArray.indexOf(event.target.value)>=0)
        targetArray.splice(
      targetArray.indexOf(event.target.value),
      1
);

else
  targetArray.push(event.target.value);
  
      var state = this.state;
      state[fieldName]=targetArray;
      this.setState(state);
}
};
  render() {
    return (
      <div className="container">
        <div className="page-header">
        <h2> Student Survey !!</h2>
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="jumbotron">
       
        <Grid>
        <Row>
        <Col md={6}><FormGroup>
              <ControlLabel> Name please ....</ControlLabel>
              <FormControl type="text" placeholder="Name here ..."
              value={this.state.name}
              onChange={this.onChange('name')}/>
              <HelpBlock> Use to identify you.</HelpBlock>
          </FormGroup>
          <FormGroup>
              <ControlLabel> Choose Favorite Color</ControlLabel>
              <FormControl componentClass="select"
               placeholder="Color here ..."
                   value={this.state.color}
              onChange={this.onChange('color')}>
                   
               <option value="red">Red</option>
               <option value="green">Green</option>
               <option value="blue">Blue</option>
               <option value="yellow">Yellow</option>
                              </FormControl> 
              <HelpBlock> Use to identify you.</HelpBlock>
          </FormGroup>
          <FormGroup>
          <ControlLabel>Favorite Movies</ControlLabel>
          <Checkbox value="harry potter"
                        checked={this.state.movies.indexOf('harry potter')>=0 ? true:false}
                        onChange={this.checkboxChange('movies')}>
                         Harry Potter
                         </Checkbox>
          <Checkbox value="lord of the rings"
                        checked={this.state.movies.indexOf('lotr')>=0 ? true:false}
                         onChange={this.checkboxChange('movies')}>
                          Lord Of The RIngs
                          </Checkbox>
          <Checkbox value="train to busan"
                          checked={this.state.movies.indexOf('ttb')>=0 ? true:false}
                          onChange={this.checkboxChange('movies')}>
                           Train to Busan
                           </Checkbox>
          </FormGroup>
          <FormGroup>
          <ControlLabel>Gender</ControlLabel>
          <Radio name="gender" value="female"
                onChange={this.onChange('gender')}> Female </Radio>
          <Radio name="gender" value="male"
                onChange={this.onChange('gender')}> MAle </Radio>
        
          </FormGroup></Col>
        <Col md={3}>
        <strong>Name is {this.state.name}</strong><br/>
        <strong>COlor is {this.state.color}</strong><br/>
         <strong>Movies are {this.state.movies.map((item,i)=>{
          return <div>
        <span className="label label-info">{item}</span>
                    </div>
                  })
         } </strong><br/>
        <strong>Gender is {this.state.gender}</strong><br/>
       
                 </Col>
        </Row></Grid>
        
        <h2>*************************************</h2>
        <Grid>
         <Row>
        <Col md={3}>Favorite Place<FormGroup>
              <ControlLabel></ControlLabel>
              <FormControl type="text" placeholder=" bohol"
              value={this.state.place}
              onChange={this.onChange('place')}/>
              <HelpBlock> Use to identify you.</HelpBlock>
          </FormGroup>
         
          <FormGroup>
          <ControlLabel>cATEGORIES</ControlLabel>
          <Checkbox value="DRINKS"
                        checked={this.state.cat.indexOf('')>=0 ? true:false}
                        onChange={this.checkboxChange('cat')}>
                        DRINKS
                         </Checkbox>
          <Checkbox value="CHIPS"
                        checked={this.state.cat.indexOf('lotr')>=0 ? true:false}
                         onChange={this.checkboxChange('cat')}>
                          CHIPS
                          </Checkbox>
          <Checkbox value="cHOCOLATE"
                          checked={this.state.cat.indexOf('ttb')>=0 ? true:false}
                          onChange={this.checkboxChange('cat')}>
                          cHOCOLATE
                           </Checkbox>
           <Checkbox value="Noodles"
                          checked={this.state.cat.indexOf('ttb')>=0 ? true:false}
                          onChange={this.checkboxChange('cat')}>
                          noodles
                           </Checkbox>
          </FormGroup>
          <FormGroup>
          <ControlLabel>Payment</ControlLabel>
          <Radio name="pay" value="atm card"
                onChange={this.onChange('gender')}> atm Card </Radio>
          <Radio name="pay" value="credit"
                onChange={this.onChange('gender')}> credit </Radio>
        <Radio name="pay" value="cash"
                onChange={this.onChange('gender')}> cash</Radio>
          </FormGroup></Col>
        <Col md={6}>
        <strong>Name is {this.state.place}</strong><br/>
     
         <strong>Categories are{this.state.cat.map((item,i)=>{
          return <div>
        <span className="label label-info">{item}</span>
                    </div>
                  })
         } </strong><br/>
        <strong>Payment {this.state.gender}</strong><br/>
       
                 </Col>
        </Row>
        </Grid>
          
      
          <ButtonGroup>
         
          <Button bsStyle="info">  <span className="glyphicon glyphicon-star"> </span> Info Button </Button>
          <Button bsStyle="primary">Info Button</Button>
          <Button bsStyle="warning">Info Button</Button>
          <Button bsStyle="danger">Info Button</Button>
          
          </ButtonGroup>
        </p>
      </div>
    );
  }
}

export default App;
