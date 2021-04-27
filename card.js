import React from 'react'
import axios from 'axios'
// import Mbut from './mbutton'
class cards extends React.Component{
constructor(){
  super()
  // this.mybut=this.mybut.bind(this);
}
  // mybut(e){
  //   console.log('this'+e)
   
  // }
  render(){
  

    return (
    <div style={{float:'left'}}>
       <div className="card m-3" style={{width:"400px"}}>
    <div className="card-body">
      <h4 className="card-title">{this.props.name}</h4>
      <h4 className="card-title">{this.props.avg}</h4>
      <h4 className="card-title">{this.props.strike}</h4>
      <h4 className="card-title">{this.props.avg}</h4>

      <p className="card-text">Sample player's card </p>
      <button onClick={()=>this.props.fun(this.props.id)} className='btn btn-primary btn-outline-info test-danger'>Delete</button>
    </div>

      {/* <Mbut oncl={this.mybut}/> */}
  </div>
  
</div>
        
        )
}
}

export default cards;