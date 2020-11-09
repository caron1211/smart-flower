import React, {Component} from 'react';
import Navigation from './components/Navigation'
import Logo from './components/Logo'
import ImageLinkForm from './components/ImageLinkForm'
import Image from './components/Image'
import Result from './components/Result'

import './App.css'



class App extends Component {

	constructor() {
	    super();
	    this.state = {
	      input: '',
	      imageUrl: '',
	      imgResult: ''
    }
  }

  convertNumToFlower(num) {
    var flower =''
    switch(num) {
      case 0:
        flower = "daisy";
        break;
      case 1:
        flower = "dandelion";
        break;
      case 2:
         flower = "rose";
        break;
      case 3:
        flower = "sunflower";
        break;
      case 4:
        flower = "tulip";
        break;

      default:
        flower = "default";
      }


    return flower;
  }


	onInputChange = (event) => {
    	this.setState({input: event.target.value});
  }

  onButtonSubmit = () => {
    this.setState({imgResult: ''})
    this.setState({imageUrl:  this.state.input}, () => {
    // console.log("text input: " + this.state.imageUrl);
      fetch('http://localhost:3000/', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        imageUrl: this.state.imageUrl
      })
    })
      .then(response => response.json())
      .then(number => {
      console.log(number);
       this.setState({imgResult: this.convertNumToFlower(number)})
      }).catch(err => console.log(err));
} )

    
  }
  
  render() {
  return (
    <div className='App'>
     <Navigation />
     <Logo />
     <ImageLinkForm
      onInputChange={this.onInputChange}
      onButtonSubmit={this.onButtonSubmit} />
      <Result imgResult={this.state.imgResult} />
      <Image imageUrl ={this.state.imageUrl} />
      </div>

  );
}
}

export default App;

