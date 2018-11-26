import React from 'react';
class DropDown extends React.Component {

render(){
  // console.log(this.props);
  return(
    <div>
    {this.props.menu.map((i,idx)=>{
      return(
        <div key={i}>
        <li key={idx} >{i}</li>
        <button className="btn btn-primary" onClick={()=> this.props.closeMenu()} key={i}>X</button>
        </div>
      );
    })}
    </div>
  )
}

}
export default DropDown;
