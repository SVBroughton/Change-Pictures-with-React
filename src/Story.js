import React from 'react'
import { useState } from 'react';
import './Stylesheet.css';
import pinkAbstract from './Assets/Pink Aesthetic Abstract Linktree Background.png';
import waterColor from './Assets/Floral Watercolor Leaves Linktree Background.png';
import neon from './Assets/Neon Linktree Background.png';

function Story(){
	
	const [pic, setPic] = useState(pinkAbstract);

  
	function changeImage(){
		if(pic===pinkAbstract){
			setPic(waterColor);
		}else if(pic===waterColor){
			setPic(neon);
		}else if(pic===neon){
			setPic(pinkAbstract);
		}
	}
	

	return <div>
			<button onClick={changeImage} className='styleButton'> Click here to change the design! </button>
			<img src={pic} className='currentImage' alt="Abstract"/> 
		   </div>
}

export default Story