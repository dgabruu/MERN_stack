import React from 'react'

class Nav extends React.Component
{
    render(){
        return(
            <div className='d-flex justify-content-around bg-warning ' >
                <a href='/' className='display-6 text-primary' style={{textDecoration:'none'}}>Home</a>
                <a href='/display' className='display-6 text-primary' style={{textDecoration:'none'}}>Display</a>
 
            </div>

        )
    }
}

export default Nav;