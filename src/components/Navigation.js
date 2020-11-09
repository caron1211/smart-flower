import React from 'react';
import Popup from "reactjs-popup";
import './Navagation.css'



const Navagation = (props) => {
	return (
<nav style={{display: 'flex', justifyContent:'flex-end'}}>		
 <Popup
    trigger={<button className="button white bg-light-purple"> Flower varieties </button>}
    modal
    closeOnDocumentClick
  >
    <span>  daisy <br />
    	    dandelion <br />
			rose  <br />
			sunflower  <br />
			tulip  <br />
			rose  
     </span>
  </Popup>
  </nav>		);
}


export default Navagation;
