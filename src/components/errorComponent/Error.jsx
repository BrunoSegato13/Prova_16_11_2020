import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';


function ContentImage(){
  return(
    <>
     <div className="Error"> 
            
            <h1>Ops!!!</h1>
            <p>A página que você está tentando acessar não existe!</p>            
            <Link to="/">Página inicial</Link>
        </div>
    </>
  )

}

export default ContentImage;