import React from 'react';
import { Link } from 'react-router-dom';
import DropDown from './DropDown';
class NavBar extends React.Component {

  constructor(props){
    super(props);
    this.state={button_pressed:false}
    this.menu = ["ghorme sabzi", "tacos", "pizza"]
  }

  handleClick(){
    this.setState({button_pressed: !this.state.button_pressed})
  }

render(){
 let water= true;
  return(
<div>
    <nav className="navbar navbar-light bg-light">
      <span className="navbar-brand mb-0 h1">Navbar</span>
      <Link className="navbar-brand" to="/about">About</Link>
      <button className="btn btn-secondary" onClick={()=>this.handleClick()}>Menu Drop-Down</button>
      {this.state.button_pressed?<DropDown menu={this.menu} closeMenu={this.handleClick.bind(this)}></DropDown>:<div></div>}
    </nav>
</div>
  )
}

}
export default NavBar;
