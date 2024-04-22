function onButtonClick() {
  
  /*
  Changes href with a single line
  document.getElementById('style').setAttribute("href", 'Assets/mystyle - Design One.css');
  
  Changes href with a variable
  var style = document.getElementById('style');
  style.setAttribute("href", 'Assets/mystyle - Design One.css');
  
  */
  
  if(style.getAttribute('href')=='Assets/mystyle - Design Two.css'){
		style.setAttribute("href", 'Assets/mystyle - Design One.css');
  } else if(style.getAttribute('href')=='Assets/mystyle - Design One.css'){
		style.setAttribute("href", 'Assets/Design Three.css');
  } else if (style.getAttribute('href')=='Assets/Design Three.css'){
		style.setAttribute("href", 'Assets/mystyle - Design Two.css');
  }
}

const button = document.getElementById('styleButton');
button.addEventListener('click', onButtonClick);