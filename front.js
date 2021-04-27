import React from 'react'

class Front extends React.Component
{
  mysub=(e)=>{
    setTimeout(() => {
      window.location='/'
    }, 3000);

  }
    render(){
        return(
            <div className='bg-secondary mt-3' style={{textAlign:'center',border:'3px solid #73AD21'}}>
                <form className='m-3 ' style={{width:'60%'}} method='POST' action='http://localhost:8000/add' onSubmit={this.mysub}>
  <div className="form-row  ">
    <div className="form-group col-md-6">
      <label for="inputEmail4" className='h3'>Player Name</label>
      <input type="text" name='uname' class="form-control" id="inputEmail4" placeholder="Name" />
    </div>
    <div className="form-group col-md-6">
      <label for="inputPassword4" className='h3'>Average</label>
      <input type="number" name='avg' class="form-control" id="inputPassword4" placeholder="Average" />
    </div>
  </div>
  <div className="form-group col-md-6">
    <label for="inputAddress" className='h3'>Strike Rate</label>
    <input type='number' name='strike' class="form-control" id="inputAddress" placeholder="batting/bowling strike rate" />
  </div>
  <div className="form-group col-md-6">
    <label for="inputAddress2" className='h3'>Best</label>
    <input type="number" name='best' class="form-control" id="inputAddress2" placeholder="Best" />
  </div>
<div className='mt-2 ml-3 d-flex align-items-center'>
  <button type="submit" className="btn btn-primary">Save</button>
  </div>
</form>

            </div>
            
        )
    }
}

export default Front;