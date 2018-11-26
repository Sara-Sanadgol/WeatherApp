import React from 'react';

class Welcome extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      example: {}
    }
  }
componentWillMount(){
  this.props.createAnExample().then(data => this.setState({example: data}));
}

render(){
  console.log(this.props.allExamples);
  if(typeof this.props.allExamples === 'undefined'){
    return(
      <div className="container">
        <h1 className="text-center">Welcome Page</h1>
        <h4>Welcome to my weather app</h4>
      </div>
    );
  } else {
    let keys = Object.keys(this.props.allExamples);
    let vals = Object.values(this.props.allExamples);
    return(
      <div className="container">
        <h1 className="text-center">Welcome Page</h1>
        <h4>Welcome to my weather app</h4>
        {keys.map(el => <li key={el}>{el}</li>)}
        {vals.map(el => <li key={el}>{el}</li>)}
      </div>
    );
  }
}

}
export default Welcome;
