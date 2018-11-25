import React from 'react';
import { Link } from 'react-router-dom';
class NavBar extends React.Component {

render(){
 let water= true;
  return(
<div>
    <nav className="navbar navbar-light bg-light">
      <span className="navbar-brand mb-0 h1">Navbar</span>
      <Link className="navbar-brand" to="/about">About</Link>
    </nav>
</div>
  )
}

}
export default NavBar;
