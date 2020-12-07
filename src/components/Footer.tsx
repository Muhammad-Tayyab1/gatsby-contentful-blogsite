import React from 'react'

function Footer() {
    return (
        <div style={{backgroundColor:'black', color:'white', height:'50px',  textAlign:'center'}}>
           <div style={{textAlign:'center', justifyContent:'center', alignContent:'center',padding:'0 20px' }}> © {new Date().getFullYear()}, Built with Gatsby</div> 
          <br/>
        </div>
    )
}

export default Footer
