import React from 'react'
import { useState } from 'react';
import courage from './Assets/Courage Waving.jpg'; 
import pinkAbstract from './Assets/Pink Aesthetic Abstract Linktree Background.png';
import waterColor from './Assets/Floral Watercolor Leaves Linktree Background.png';
import neon from './Assets/Neon Linktree Background.png';

function Story(){
	
	const [pic, setPic] = useState(pinkAbstract);

  
	function changeImage(){
		if(pic==pinkAbstract){
			setPic(waterColor);
		}else if(pic==waterColor){
			setPic(neon);
		}else if(pic==neon){
			setPic(pinkAbstract);
		}
	}
	function clickHappened(){
		alert('Click happened');
	}

	return <div>
			<button onClick={changeImage}> Click here to change the web page design! </button>
			<img src={pic} alt="Abstract"/> 

			</div>
}

export default Story