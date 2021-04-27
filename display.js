import React from 'react'
import axios from 'axios'
import Card from './card'

class disp extends React.Component{
constructor(props)
{
    super(props)
    
    this.state={
        search:'',
        details:[]
    }
    this.mybut=this.mybut.bind(this);
    
}

componentDidMount(){

    axios.get('http://localhost:8000/').then(
        (res)=>{
            this.setState({details:res.data})
            

        }
    )
    .catch((e)=>{

        console.log('not conn'+e)
        
    })

}
mybut(e){
    console.log('this'+e)
    axios.get('http://localhost:8000/'+e)
        .then(res=>{console.log(res.data)
            this.setState({details:this.state.details.filter(el=>el._id!==e)})
        })

   
  }

mychange=(e)=>{
    this.setState({search:e.target.value})
    
}


    render(){
        console.log(this.state.search)
        const {search,details}=this.state;
        var list=details.filter(el=>{return el.name.indexOf(search)!==-1})
        console.log('it '+list.map(e=>e.name))
    return (
        <div>
        {this.props.children}
        
        <input type='text' style={{width:'50%',marginTop:'30px',marginLeft:'20px'}} onChange={this.mychange} placeholder='search'></input>
        <div>
            {
                list.map((data)=>{
                    return(
                        <Card name={data.name} avg={data.avg} strike={data.strike}
                         best={data.best} id={data._id} fun={this.mybut}/>
                    )
                })
            }
        </div>
        
        
    </div>
 
    )
}
}

export default disp;